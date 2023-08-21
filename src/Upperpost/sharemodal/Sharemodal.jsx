import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import Upperpost from "../Upperpost";

const Sharemodal = ({ modalopen, setModalOpen }) => {
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
      <Upperpost />
    </Modal>
  );
};
export default Sharemodal;
