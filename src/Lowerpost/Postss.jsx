import React from "react";
import "./Postss.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
const Postss = ({ data, id }) => {
  //   console.log(data.image);
  return (
    <div className="postss" key={id}>
      <img src={data.image} alt="" />
      <div className="reactions">
        {data.liked ? <FaThumbsDown className="reactionicon"/> : <FaThumbsUp className="reactionicon" />}
        <FaComments className="reactionicon"/>
        <FaPaperPlane className="reactionicon" />
      </div>
      <span>{data.likes} likes</span>
      <div className="details">
        <span>{data.name}</span>
        <span>{data.description}</span>
      </div>
    </div>
  );
};

export default Postss;
