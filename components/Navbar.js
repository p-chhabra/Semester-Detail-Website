import styles from "../styles/navbar.module.css";
import Link from "next/link";

///Navbar Component
const Navbar = () => {
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
        {
          <li className="px-4 border-2 border-[#BB86FC] rounded-md p-1 hover:text-[#BB86FC] duration-500 text-sm my-2">
            <Link href="/">SignIn</Link>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
