import { Modal, useMantineTheme } from "@mantine/core";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UploadFile } from "../../actioncreators/Uploadfile";
import { updateUser } from "../../actioncreators/Usercreator";
const Profilemodal = ({ modalopen, setModalOpen, userdata }) => {
  const theme = useMantineTheme();
  //lets deal with data state so that i show them in the modal
  //and i also submit them to the database on updtaing

  //lets get the data from userdata prop but we remove password

  const { password, ...others } = userdata;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.authdata.user);
  console.log(user);
  const [formdata, setformdata] = useState(others);
  const [profileimage, setprofileimage] = useState(null);
  const [coverimage, setCoverimage] = useState(null);
  const param = useParams();
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  //filehandling
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let image = e.target.files[0];
      e.target.name === "profilePicture"
        ? setprofileimage(image)
        : setCoverimage(image);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newdata = formdata;
    console.log(newdata);
    if (profileimage) {
      const data = new FormData();
      const filename = profileimage.name;
      console.log(filename);
      data.append("filename", filename);
      data.append("file", profileimage);
      newdata.profilePicture = filename;
      try {
        dispatch(UploadFile(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverimage) {
      const data = new FormData();
      const filename = coverimage.name;
      console.log(filename);
      data.append("filename", filename);
      data.append("file", coverimage);
      newdata.coverPicture = filename;
      try {
        dispatch(UploadFile(data));
      } catch (error) {
        console.log(error);
      }
    }
    console.log(newdata);
    dispatch(updateUser(param.id, newdata));
    setModalOpen(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.dark[5]
      }
      size="35%"
      opened={modalopen}
      onClose={() => {
        setModalOpen(false);
      }}>
      <div className="rightside">
        <form onSubmit={handleFormSubmit}>
          <h2 className="title">Edit Profile</h2>
          <div className="form_control">
            <input
              type="text"
              name="firtname"
              placeholder="firstname"
              onChange={handlechange}
              value={formdata.firstname}
            />
            <input
              type="text"
              name="secondname"
              placeholder="secondname"
              onChange={handlechange}
              value={formdata.secondname}
            />
          </div>
          <div className="form_control">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handlechange}
              value={formdata.username}
            />
          </div>
          <div className="form_control">
            <input
              type="status"
              name="status"
              placeholder="Status"
              onChange={handlechange}
              value={formdata.status}
            />
          </div>
          <div className="form_control">
            <input
              type="text"
              name="livesin"
              placeholder="lives in"
              onChange={handlechange}
              value={formdata.livesin}
            />
            <input
              type="text"
              name="worksAt"
              placeholder="workplace"
              onChange={handlechange}
              value={formdata.worksAt}
            />
          </div>
          <div className="form_control">
            <label>Profile photo</label>
            <input
              type="file"
              name="profilePicture"
              placeholder="profilePicture"
              onChange={handleFile}
            />
            <label>Cover photo</label>
            <input
              type="file"
              name="coverPicture"
              placeholder="coverPicture"
              onChange={handleFile}
            />
          </div>

          <div className="form_control">
            <button type="submit" className="button" id="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default Profilemodal;
