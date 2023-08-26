import React, { useEffect } from "react";
import "./Lowerpost.css";
import { postsdata } from "../Data/Lowepostsdata";
import Postss from "./Postss";
import { useDispatch, useSelector } from "react-redux";
import { getTimelineposts } from "../actioncreators/Timelinecreator";
const Lowerpost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer);
  const posts = useSelector((state) => state.postreducer.posts);
  console.log(user);

  useEffect(() => {
    getTimelineposts(user._id);
  }, []);

  return (
    <div className="lowerpost">
      {posts.map((post, id) => {
        return <Postss data={post} id={id} />;
      })}
    </div>
  );
};

export default Lowerpost;
