import PostModel from "../models/postmodel.js";

export const addpost = async (req, res) => {
  const newuser = new PostModel(req.body);
  try {
    await newuser.save();
    res.status(200).json("newpost added");
  } catch (error) {
    res.status(500).json(error);
  }
};
