import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { userfollow, userunfollow } from "../actioncreators/Usercreator.js";
const User = ({ person }) => {
  console.log(person);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.authreducer?.authdata);
  const [following, setfollowing] = useState(
    person.followers.includes(user?._id)
  );
  console.log(user);
  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const followuser = () => {
    following
      ? dispatch(userunfollow(person?._id, user))
      : dispatch(userfollow(person?._id, user));
    setfollowing((prev) => !prev);
  };

  return (
    <div className="follower">
      <div>
        <img
          className="image"
          src={
            person?.profilePicture
              ? serverpublic + user?.profilePicture
              : serverpublic + "yahh.jpg"
          }
          alt=""
        />

        <div className="name">
          <span>{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button unfollowerbutton" : "button followerbutton"
        }
        onClick={followuser}>
        {following ? "unfollow" : "follow"}
      </button>
    </div>
  );
};

export default User;
