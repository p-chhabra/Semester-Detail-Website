import React from "react";
import { UserAuth } from "../modals/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { useAlert } from "react-alert";
import { db } from "../lib/firebase";

const Comment = (props) => {
  const { img, time, comment, name, id, commentID, setNewAdded, newAdded } =
    props;
  const currentdate = time.toDate();

  const { user } = UserAuth();
  const alert = useAlert();

  var datetime =
    currentdate.getDate() +
    "/" +
    currentdate.getMonth() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();

  //DELETE COMMENT HANDLER FUNCTION
  const deleteHandler = async () => {
    await deleteDoc(doc(db, "comments", commentID));
    setNewAdded(!newAdded);
    alert.success("Comment deleted successfully!");
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={img}
          alt=""
        ></img>
      </div>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{name}</strong>{" "}
        <span className="text-xs text-gray-400">{datetime}</span>
        <p className="text-sm">{comment}</p>
        {user?.uid == id && (
          <button
            onClick={deleteHandler}
            className="mt-6 border-2 border-[#BB86FC] rounded-md p-1 hover:text-[#BB86FC] duration-500 text-sm"
          >
            Delete Comment
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
