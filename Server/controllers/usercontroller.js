import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const getuser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherdetails } = user._doc;
      res.status(200).json(otherdetails);
    } else {
      res.status(404).json("user doesnt exist");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//lets update the user using an api...!
export const updateuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid, currentuseradmindstatus, password } = req.body;

  //lets interact with the database
  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }
    ///since i have updated the req.body.password field ,then the req.body will also change..
    if (id === currentuserid || currentuseradmindstatus) {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete users...
export const deleteuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid, currentuseradmindstatus } = req.body;
  if (currentuserid == id || currentuseradmindstatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("user delted successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
//follow user
export const followuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;
  if (currentuserid === id) {
    res.status(200).json("Hey man this action is forbidden");
  } else {
    try {
      const followinguser = await UserModel.findById(id);
      const followeduser = await UserModel.findById(currentuserid);

      if (!followinguser.followers.includes(currentuserid)) {
        await followinguser.updateOne({ $push: { followers: currentuserid } });
        await followeduser.updateOne({ $push: { following: id } });
        res.status(200).json("user followed");
      } else {
        res.status(404).json("user already followed");
      }
    } catch (error) {
      res.status(404).json({ message: "User not found" });
    }
  }
};
//unfollowusers
export const unfollowuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;
  if (currentuserid === id) {
    res.status(200).json("Hey man this action is forbidden");
  } else {
    try {
      const followinguser = await UserModel.findById(id);
      const followeduser = await UserModel.findById(currentuserid);

      if (followinguser.followers.includes(currentuserid)) {
        await followinguser.updateOne({ $pull: { followers: currentuserid } });
        await followeduser.updateOne({ $pull: { following: id } });
        res.status(200).json("user unfollowed");
      } else {
        res.status(404).json("user already unfollowed");
      }
    } catch (error) {
      res.status(404).json({ message: "User not found" });
    }
  }
};
