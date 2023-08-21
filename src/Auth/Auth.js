import React, { useState } from "react";
import "./Auth.css";
import { IoLogoTwitter } from "react-icons/io5";
const Auth = () => {
  const [signup, setSignup] = useState(true);
  const [inputfield, setinputfield] = useState({
    secondname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const handlechange = (e) => {
    setinputfield({ ...inputfield, [e.target.name]: e.target.value });
  };

  const [confirmpassword, setConfirmpassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (signup) {
      if (inputfield.password !== inputfield.confirmpassword)
        setConfirmpassword(true);
    }
  };
  const reset = () => {
    setConfirmpassword(false);
    setinputfield({
      firstname: "",
      secondname: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <div className="auth">
      <div className="leftside">
        <IoLogoTwitter color="green" size={40} />
        <div className="essay">
          <span>Welcome</span>
          <h2>Eliod4</h2>
        </div>
      </div>
      <div className="rightside">
        <form onSubmit={handlesubmit}>
          <h2 className="title">{signup ? "Signup" : "Login"}</h2>
          {signup && (
            <div className="form_control">
              <input
                type="text"
                name=" firstname"
                placeholder=" firstname"
                onChange={handlechange}
                value={inputfield.firstname}
              />
              <input
                type="text"
                name="secondname"
                placeholder="secondname"
                onChange={handlechange}
                value={inputfield.secondname}
              />
            </div>
          )}

          <div className="form_control">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handlechange}
              value={inputfield.username}
            />
          </div>
          <div className="form_control">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handlechange}
              value={inputfield.password}
            />
            {signup && (
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirmpassword"
                onChange={handlechange}
                value={inputfield.confirmpassword}
              />
            )}
          </div>
          <div
            className="form_control"
            style={{ display: confirmpassword ? "" : "none", color: "red" }}>
            <span> * Confirm password</span>
          </div>

          <div
            className="form_control"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSignup((prev) => !prev);
              reset();
            }}>
            {signup ? (
              <span>Already have an account? login</span>
            ) : (
              <span href="">Create an account? Signup</span>
            )}
          </div>
          <div className="form_control">
            <button className="button" id="btn" type="submit">
              {signup ? "Signup" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;