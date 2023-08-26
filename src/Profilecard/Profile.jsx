import React from "react";
import "./Profile.css";
import swipeball from "../Images/swpeball.jpeg";
import hazard from "../Images/hazard.jpeg";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.authreducer.authdata);
  console.log(user);

  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverpublic);
  return (
    <div className="profile">
      <div className="profile_images">
        <img
          src={
            user.coverPicture
              ? serverpublic + user.coverPicture
              : serverpublic + "setupp.jpeg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverpublic + user.profilePicture
              : serverpublic + "ME.jpeg"
          }
          alt=""
        />
      </div>
      <div className="profiledetail">
        <span>Eliod</span>
        <span>Developer</span>
      </div>
      <div className="follow">
        <hr />
        <div>
          <div className="followers">
            <span>28359</span>
            <span>followers</span>
          </div>
          <div className="centerdiv"></div>
          <div className="following">
            <span>2</span>
            <span>following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My profile</span>
    </div>
  );
};

export default Profile;
