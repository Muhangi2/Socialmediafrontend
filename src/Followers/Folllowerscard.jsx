import React, { useState, useEffect } from "react";
import "./Followers.css";
import { useSelector } from "react-redux";
import { getallusers } from "../requests/Userrequest.js";
import User from "../users/User";
const Folllowerscard = () => {
  // console.log(data);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state?.authreducer?.authdata);
  console.log(user);
  useEffect(() => {
    const fetchalluser = async () => {
      try {
        const {data} = await getallusers();
        console.log(data);
        setPersons(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchalluser();
  }, []);
  console.log(persons);

  return (
    <div className="followerscard">
      <h2>Who is following</h2>
      {persons.map((person) => {
        console.log(person._id);
        console.log(user?._id);
        if (person._id !== user?._id) {
          return <User key={person?._id} person={person} />;
        }
        return null; // Added explicit return
      })}
      <h2 className="more_followers">More</h2>
    </div>
  );
};

export default Folllowerscard;
