import React from "react";
import "./Trends.css";
import { trends } from "../../Data/Trends.js";
const Trends = () => {
  // console.log(trends)
  return (
    <div className="trendcard">
      <h2>Trends</h2>
      {trends.map((data, index) => {
       return (
          <div className="trends" key={index}>
            <span>#{data.name}</span>
            <span>{data.shares} shares</span>
          </div>
        );
      })}
      <div className="trendbuttondiv">
      <button className="button trendbutton" >Share</button>
      </div>
    </div>
  );
};

export default Trends;
