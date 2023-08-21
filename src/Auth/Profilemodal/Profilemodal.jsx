import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";

const Profilemodal = ({ modalopen, setModalOpen }) => {
  const theme = useMantineTheme();
  console.log(theme);
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.dark[5]
      }
      size="50%"
      opened={modalopen}
      onClose={() => {
        setModalOpen(false);
      }}>
      <div className="rightside">
        <form>
          <h2 className="title">Edit Profile</h2>
          <div className="form_control">
            <input type="text" name="firtname" placeholder="firstname" />
            <input type="text" name="secondname" placeholder="secondname" />
          </div>
          <div className="form_control">
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form_control">
            <input type="status" name="Status" placeholder="Status" />
          </div>
          <div className="form_control">
            <input type="text" name="residence" placeholder="Residence place" />
            <input type="text" name="workplace" placeholder="workplace" />
          </div>
          <div className="form_control">
            <label>Profile photo</label>
            <input
              type="file"
              name="profilephoto"
              placeholder="Residence place"
            />
            <label>Cover photo</label>
            <input type="file" name="coverphoto" placeholder="coverphoto" />
          </div>

          <div className="form_control">
            <button className="button" id="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default Profilemodal;
