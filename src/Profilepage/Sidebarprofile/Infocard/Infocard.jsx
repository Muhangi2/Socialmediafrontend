import React from "react";
import "./Infocard.css";
import { FaEdit } from "react-icons/fa";
const Infocard = () => {
  return (
    <div className="infocard">
      <div className="infocardheader">
        <span className="first_span">Yourinfo</span>
        <FaEdit className="icon" size={25} />
      </div>
      <div className="infostatus">
        <span className="first_span">status</span>
        <span>in relatioship</span>
      </div>
      <div className="infolocation">
        <span className="first_span">lives</span>
        <span>Kikoni</span>
      </div>
      <div className="infojob">
        <span className="first_span">Works at</span>
        <span>ktd consultants</span>
      </div>
      <div className="profilebutton">
        <button className="button logout">Logout</button>
      </div>
    </div>
  );
};

export default Infocard;
