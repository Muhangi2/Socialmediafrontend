import React from "react";
import "./Lowerpost.css";
import { postsdata } from "../Data/Lowepostsdata";
import Postss from "./Postss";
const Lowerpost = () => {
  console.log(postsdata);
  return (
    <div className="lowerpost">
      {postsdata.map((post, id) => {
        return (
          //i have to pass in the data as prop
          //and of course plus the id
          <Postss data={post} id={id} />
        );
      })}
    </div>
  );
};

export default Lowerpost;
