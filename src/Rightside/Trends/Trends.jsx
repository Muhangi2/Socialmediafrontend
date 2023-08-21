import React, { useState } from "react";
import "./Trends.css";
import { trends } from "../../Data/Trends.js";
import Sharemodal from "../../Upperpost/sharemodal/Sharemodal";

const Trends = () => {
  const [modalopen, setModalOpen] = useState(false);
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
        <button className="button trendbutton" onClick={()=>{setModalOpen(true)}}>Share</button>
        <Sharemodal modalopen={modalopen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default Trends;
