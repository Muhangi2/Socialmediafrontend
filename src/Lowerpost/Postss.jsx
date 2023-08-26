import React, { useState } from "react";
import "./Postss.css";
import { FaDraft2Digital, FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { likecreator } from "../actioncreators/postcreator";
const Postss = ({ data, id }) => {
  //states
  console.log(id);
  const authdata = useSelector((state) => state.authreducer.authdata.user);
  console.log(authdata._id);
  console.log(data.likes?.length);
  const [like, setLike] = useState(data.likes?.includes(authdata._id));
  console.log(like);
  const [likes, setLikes] = useState(data.likes?.length);
  console.log(likes);

  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverpublic);
  const handleclick = () => {
    setLike((prev) => !prev);
    likecreator(id, authdata._id);
    like ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="postss" key={id}>
      <div className="details">
        <span>{data.name}</span>
        <span>{data.description}</span>
      </div>
      <img
        src={data.image ? serverpublic + data.image : serverpublic + ""}
        alt=""
      />
      <div className="reactions">
        <div onClick={handleclick}>
          {like ? (
            <FaThumbsDown className="reactionicon" />
          ) : (
            <FaThumbsUp className="reactionicon" />
          )}
        </div>
        <FaComments className="reactionicon" />
        <FaPaperPlane className="reactionicon" />
      </div>
      <span>{likes} likes</span>
    </div>
  );
};

export default Postss;
