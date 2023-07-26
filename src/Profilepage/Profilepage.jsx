import React from "react";
import "./Profilepage.css";
import Sidebarprofile from "./Sidebarprofile/Sidebarprofile";
import Profile from "../Profilecard/Profile";
import Posts from "../Posts/Posts";
import Rightside from "../Rightside/Rightside";
const Profilepage = () => {
  return (
    <div className="profilepage">
      <Sidebarprofile />
      <div className="profilecard">
        <Profile />
        <Posts />
      </div>
      <Rightside />
    </div>
  );
};

export default Profilepage;
