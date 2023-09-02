import React from "react";
import { useRef, useState } from "react";
import hazard from "../Images/hazard.jpeg";
import "./Upperpost.css";
import { FaCamera } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { UploadFile } from "../actioncreators/Uploadfile";
import { postcreator } from "../actioncreators/postcreator";

const Upperpost = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const imageref = useRef();
  const description = useRef();
  //lets get the state inorder to get the user i
  const { user } = useSelector((state) => state?.authreducer?.authdata);
  console.log(user);

  const uploading = useSelector((state) => state.postreducer?.uploading);
  console.log(uploading);
  // event function
  const handleimage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let selectedimage = event.target.files[0];
      setImage({
        image: selectedimage,
      });
    }
  };
  //am adding the the image to the formdata object
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user?._id);
    const newpost = {
      userId: user?._id,
      description: description.current.value,
    };
    if (image) {
      const data = new FormData();
      console.log(image);
      const filename = image.image.name;
      console.log(filename);
      data.append("filename", filename);
      data.append("file", image.image);
      newpost.image = filename;
      try {
        dispatch(UploadFile(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(postcreator(newpost));
    reset();
  };

  const reset = () => {
    setImage(null);
    description.current.value = "";
  };

  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="postshare">
      <img
        src={
          user?.coverPicture
            ? serverpublic + user?.coverPicture
            : serverpublic + "setupp.jpeg"
        }
        alt=""
      />
      <div>
        <input
          type="text"
          required
          placeholder="what's happening"
          ref={description}
        />
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
          <button
            className="button sharebutton"
            onClick={handlesubmit}
            disabled={uploading}>
            {uploading ? "loading..." : "Share"}
          </button>
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
            <AiOutlineClose className="close" onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image?.image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upperpost;
