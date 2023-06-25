import React, { useRef, useEffect, useState } from "react";
import { UserAuth } from "../modals/AuthContext";
import Comment from "./Comment";
import { useAlert } from "react-alert";
import {
  serverTimestamp,
  query,
  where,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { comment } from "postcss";

const CommentSection = ({ course }) => {
  const { user } = UserAuth();
  const alert = useAlert();
  const commentRef = useRef();
  const [comments, setComments] = useState([]);
  const [newAdded, setNewAdded] = useState(false);

  //USE EFFECT
  useEffect(() => {
    const fetchData = async () => {
      let commentArray = [];
      const q = query(
        collection(db, "comments"),
        where("course", "==", course)
      );
      const commentsList = await getDocs(q);

      commentsList.forEach((comment) => {
        const obj = {
          commentID: comment.id,
          ...comment.data(),
        };
        commentArray.push(obj);
      });

      setComments(commentArray);
    };
    fetchData();
  }, [user, newAdded]);

  //ADD COMMENT HANDLER FUNCTION
  const addCommentHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      alert.show("Sign in to add comment");
      return;
    }

    try {
      await addDoc(collection(db, "comments"), {
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
        comment: commentRef.current.value,
        timeStamp: serverTimestamp(),
        uid: user.uid,
        course: course,
      });
    } catch (err) {
      console.log(err);
    }

    setNewAdded(!newAdded);
    alert.success("Comment added successfully!");
    commentRef.current.value = "";
  };

  return (
    <div className="antialiased mx-auto max-w-screen-sm">
      <h3 className="mb-4 text-3xl font-semibold text-gray-300">Comments</h3>

      <div className="space-y-4 mb-32">
        {comments.map((comment) => {
          return (
            <Comment
              name={comment.name}
              img={comment.img}
              time={comment.timeStamp}
              comment={comment.comment}
              id={comment.uid}
              commentID={comment.commentID}
              setNewAdded={setNewAdded}
              newAdded={newAdded}
              key={comment.timeStamp}
            />
          );
        })}
      </div>

      {/* ADD COMMENT */}
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            ref={commentRef}
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="button"
          onClick={addCommentHandler}
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 hover:text-purple-500"
        >
          Post comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
