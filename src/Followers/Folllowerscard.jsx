import React from "react";
import "./Followers.css";
import { data } from "../Data/data.js";
const Folllowerscard = () => {
  // console.log(data);
  return (
    <div className="followerscard">
      <h2>Who is following</h2>
      {data.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img className="image" src={follower.image} alt="" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
           <button className="button followerbutton">follow</button>
          </div>
        );
      })}
      <h2 className="more_followers">More</h2>
    </div>
  );
};

export default Folllowerscard;
