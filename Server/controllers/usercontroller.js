import PostModel from "../models/postmodel.js";
import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  const { _id, password } = req.body;
  console.log(password);
  //lets interact with the database
  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }
    ///since i have updated the req.body.password field ,then the req.body will also change..
    if (id === _id) {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      //generating webtoken
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.TOKEN_STRING,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, token });
      console.log(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete users...
export const deleteuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid, currentuseradmindstatus } = req.body;
  if (currentuserid === id || currentuseradmindstatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("user delted successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

//get all users
export const getallusers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      console.log(user._doc);
      const { password, ...others } = user._doc;
      return others;
    });
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//follow user
export const followuser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;
  if (_id === id) {
    res.status(200).json("Hey man this action is forbidden");
  } else {
    try {
      const followinguser = await UserModel.findById(id);
      const followeduser = await UserModel.findById(_id);

      if (!followinguser.followers.includes(_id)) {
        await followinguser.updateOne({ $push: { followers: id } });
        await followeduser.updateOne({ $push: { following:_id } });
        res.status(200).json("user followed");
      } else {
        res.status(404).json("user already followed");
      }
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
};
//unfollowusers
export const unfollowuser = async (req, res) => {

  const id = req.params.id;
  console.log(id)
  const { _id } = req.body;
  if (_id === id) {
    res.status(200).json("Hey man this action is forbidden");
  } else {
    try {
      const followinguser = await UserModel.findById(id);
      const followeduser = await UserModel.findById(_id);

      if (followinguser.followers.includes(_id)) {
        await followinguser.updateOne({ $pull: { followers: _id} });
        await followeduser.updateOne({ $pull: { following: id } });
        res.status(200).json("user unfollowed");
      } else {
        res.status(404).json("user already unfollowed");
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "User not found" });
    }
  }
};
