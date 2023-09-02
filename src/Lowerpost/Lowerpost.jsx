import React, { useEffect } from "react";
import "./Lowerpost.css";
import { postsdata } from "../Data/Lowepostsdata";
import Postss from "./Postss";
import { useDispatch, useSelector } from "react-redux";
import { getTimelineposts } from "../actioncreators/Timelinecreator";
import { useParams } from "react-router-dom";
const Lowerpost = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authreducer?.authdata);
  let posts = useSelector((state) => state.postreducer?.posts);
  const params = useParams();
  console.log(user);
  console.log(posts);
  useEffect(() => {
    getTimelineposts(user?._id);
  }, []);

  if (!posts) return "No posts";
  if (params.id) posts = posts.filter((post) => post?.userId === params.id);
  return (
    <div className="lowerpost">
      {posts.map((post, id) => {
        return <Postss data={post} id={id} />;
      })}
    </div>
  );
};

export default Lowerpost;
