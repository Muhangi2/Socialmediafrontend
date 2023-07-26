import React from "react";
import "./Sidebarprofile.css";
import Logosearch from "../../Logosearch/Logosearch";
import Folllowerscard from "../../Followers/Folllowerscard";
import Infocard from "./Infocard/Infocard";
const Sidebarprofile = () => {
  return (
    <div className="sidebarprofile">
      <Logosearch />
      <Infocard />
      <Folllowerscard />
    </div>
  );
};

export default Sidebarprofile;
