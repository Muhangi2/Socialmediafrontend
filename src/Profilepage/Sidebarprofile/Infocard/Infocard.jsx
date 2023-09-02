import React, { useState, useEffect } from "react";
import "./Infocard.css";
import { FaEdit } from "react-icons/fa";
import Profilemodal from "../../../Auth/Profilemodal/Profilemodal";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getuserdata } from "../../../requests/Userrequest"; // Import the getuserdata function
import { logout } from "../../../actioncreators/Authcreator";

const Infocard = () => {
  const dispatch = useDispatch();
  const [modalopen, setModalOpen] = useState(false);
  const params = useParams();
  const userid = params?.id;
  console.log(userid);
  const userdata = useSelector((state) => state.authreducer.authdata?.user);
  const [profile, setuserprofile] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (userid === userdata?._id) {
        setuserprofile(userdata);
        console.log(userdata);
      } else {
        try {
          const response = await getuserdata(userid);
          console.log(response);
          const profileuser = response?.data; // Extract the data from the response
          setuserprofile(profileuser);
          console.log(profileuser);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [userid, userdata]);
  //lets logout
  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <div className="infocard">
      <div className="infocardheader">
        <span className="first_span">Yourinfo</span>
        {userdata?._id === userid ? (
          <div>
            <FaEdit
              className="icon"
              size={25}
              onClick={() => {
                setModalOpen(true);
              }}
            />
            <Profilemodal
              userdata={userdata}
              modalopen={modalopen}
              setModalOpen={setModalOpen}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="infostatus">
        <span className="first_span">Firstname</span>
        <span>{profile?.firstname}</span>
        <span className="first_span">Secondname</span>
        <span>{profile?.secondname}</span>
      </div>
      <div className="infostatus">
        <span className="first_span">Username</span>
        <span>{profile?.username}</span>
      </div>
      <div className="infostatus">
        <span className="first_span">status</span>
        <span>
          {profile?.status
            ? profile?.status
            : "Write about relationship status"}
        </span>
      </div>
      <div className="infolocation">
        <span className="first_span">lives</span>
        <span>
          {profile?.livesin ? profile?.livesin : "Write about your workplace"}
        </span>
      </div>
      <div className="infojob">
        <span className="first_span">Works at</span>
        <span>
          {profile?.worksAt ? profile?.worksAt : "Write about your workplace"}
        </span>
      </div>
      <div className="profilebutton">
        <button className="button logout" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Infocard;
