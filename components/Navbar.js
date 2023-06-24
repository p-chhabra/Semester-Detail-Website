import styles from "../styles/navbar.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../modals/AuthContext";
import {
  doc,
  setDoc,
  serverTimestamp,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAlert } from "react-alert";

///Navbar Component
const Navbar = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  const alert = useAlert();

  //sign in handler
  const signInHandler = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  //sign out handler
  const signOutHandler = async () => {
    try {
      await logOut();
      alert.success("Sign Out Successful!");
    } catch (err) {
      console.log(err);
    }
  };

  //storing in database
  useEffect(() => {
    if (user && user.displayName) {
      alert.success("Sign In Successful!");
      const addUser = async () => {
        const res2 = await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          image: user.photoURL,
          token: user.accessToken,
          timeStamp: serverTimestamp(),
        });
        console.log(user.displayName);
      };

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      if (!q) addUser();
    }
  }, [user]);

  return (
    ///Wide Device Navbar
    <nav className="w-full flex justify-between items-center px-4 font-bold bg-[#000000] shadow-2xl shadow-[BB86FC]">
      <Link href="/">
        <h1 className="text-gray-300 text-3xl hover:text-[#BB86FC] duration-500">
          SemDetail
        </h1>
      </Link>
      <ul className="flex flex-row text-gray-300 p-2 items-center space-x-6">
        {
          <li
            className={`px-4 p-1 ${styles.hover_underline_animation} hover:text-[#BB86FC] duration-500 text-sm`}
          >
            <Link href="/">Home</Link>
          </li>
        }
        <li
          className={`px-4 p-1 ${styles.hover_underline_animation} hover:text-[#BB86FC] duration-500 text-sm`}
        >
          <Link href="/about">About Us</Link>
        </li>
        {
          <li
            className={`px-4 p-1 ${styles.hover_underline_animation} hover:text-[#BB86FC] duration-500 text-sm`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        }
        {user ? (
          <li
            onClick={signOutHandler}
            className="px-4 border-2 border-[#BB86FC] rounded-md p-1 hover:text-[#BB86FC] duration-500 text-sm my-2"
          >
            SignOut
          </li>
        ) : (
          <li
            onClick={signInHandler}
            className="px-4 border-2 border-[#BB86FC] rounded-md p-1 hover:text-[#BB86FC] duration-500 text-sm my-2"
          >
            SignIn
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
