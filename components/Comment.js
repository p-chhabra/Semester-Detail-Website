import React from "react";

const Comment = (props) => {
  const { img, time, comment, name } = props;

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
        <span className="text-xs text-gray-400">{"4:32"}</span>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
