import React from "react";
import { useRef, useState } from "react";
import hazard from "../Images/hazard.jpeg";
import "./Upperpost.css";
import { FaCamera } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
const Upperpost = () => {
  const [image, setImage] = useState(null);
  const imageref = useRef();
  // event function
  const handleimage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      setImage({
        image: URL.createObjectURL(image),
      });
    }
  };
  console.log(image);
  return (
    <div className="postshare">
      <img src={hazard} alt="" />
      <div>
        <input type="text" placeholder="what's happening" />
        <div className="postoptions">
          <div
            className="option"
            style={{ color: "green" }}
            onClick={() => imageref.current.click()}>
            <FaCamera size={30} />
            photos
          </div>
          <div className="option" style={{ color: "orange" }}>
            <MdVideoLibrary size={30} />
            videos
          </div>
          <div className="option" style={{ color: "purple" }}>
            <MdSchedule size={30} />
            location
          </div>
          <div className="option" style={{ color: "black" }}>
            <MdLocationOn size={30} />
            Schedule
          </div>
          <button className="button sharebutton">Share</button>
        </div>
        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myimage"
            ref={imageref}
            onChange={handleimage}
          />
        </div>
        {image && (
          <div className="previewimage">
            <AiOutlineClose  className="close" onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upperpost;
