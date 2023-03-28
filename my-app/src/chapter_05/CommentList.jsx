import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "Java",
    comment: "안녕하세요. Java입니다.",
  },
  {
    name: "JavaScript",
    comment: "안녕하세요. JavaScript입니다.",
  },
  {
    name: "C",
    comment: "안녕하세요. C입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;