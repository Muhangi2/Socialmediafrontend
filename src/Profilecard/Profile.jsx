import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state?.authreducer?.authdata?.user);
  const userdata = useSelector((state) => state?.authreducer?.authdata?.user);
  const posts = useSelector((state) => state?.postreducer?.posts);
  console.log(posts);
  console.log(user);
  console.log(userdata);
  const serverpublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverpublic);

  //LETS SET SOME LOGIC ABOUT SHOWING THE PAGE
  const profilepage = false;

  return (
    <div className="profile">
      <div className="profile_images">
        <img
          src={
            user?.coverPicture
              ? serverpublic + user?.coverPicture
              : serverpublic + "setupp.jpeg"
          }
          alt=""
        />
        <img
          src={
            user?.profilePicture
              ? serverpublic + user?.profilePicture
              : serverpublic + "ME.jpeg"
          }
          alt=""
        />
      </div>
      <div className="profiledetail">
        <span>{userdata?.username}</span>
        <span>
          {userdata?.worksAt ? user?.worksAt : "Write about what you do"}
        </span>
      </div>
      <div className="follow">
        <hr />
        <div>
          <div className="followers">
            <span>{userdata?.followers.length}</span>
            <span>followers</span>
          </div>
          <div className="centerdiv"></div>
          <div className="following">
            <span>{userdata?.following.length}</span>
            <span>following</span>
          </div>
          <div className="centerdiv"></div>
          <div className="following">
            <span>
              {posts.filter((post) => post?.userId === userdata?._id).length}
            </span>
            <span>posts</span>
          </div>
        </div>
        <hr />
      </div>
      {profilepage ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${userdata?._id}`}>
            My profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default Profile;
