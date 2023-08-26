import React from "react";
import "./Postss.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
const Postss = ({ data, id }) => {
  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverpublic);

  return (
    <div className="postss" key={id}>
       <div className="details">
        <span>{data.name}</span>
        <span>{data.description}</span>
      </div>
      <img src={data.image ? serverpublic + data.image :serverpublic + ""} alt="" />
      <div className="reactions">
        {data.liked ? (
          <FaThumbsDown className="reactionicon" />
        ) : (
          <FaThumbsUp className="reactionicon" />
        )}
        <FaComments className="reactionicon" />
        <FaPaperPlane className="reactionicon" />
      </div>
      <span>{data.likes} likes</span>
    </div>
  );
};

export default Postss;
