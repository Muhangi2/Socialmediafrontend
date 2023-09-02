import React from "react";
import "./Rightside.css";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Trends from "./Trends/Trends";
import {Link}from "react-router-dom"
const Rightside = () => {
  return (
    <div className="rightside">
      <div className="rightside_icons">
        <Link style={{ textDecoration: "none" }} to={"/home"}>
          
          <FaHome className="reactionicon" />
        </Link>

        <FaComments className="reactionicon" />
        <FaBell className="reactionicon" />
        <FaCog className="reactionicon" />
      </div>
      <Trends />
    </div>
  );
};

export default Rightside;
