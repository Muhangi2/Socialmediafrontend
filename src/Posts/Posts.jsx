import React from "react";
import "./Posts.css";
import Upperpost from "../Upperpost/Upperpost";
import Lowerpost from "../Lowerpost/Lowerpost";
const Posts = () => {
  return (
    <div className="posts">
      <Upperpost />
      <Lowerpost />
    </div>
  );
};

export default Posts;
