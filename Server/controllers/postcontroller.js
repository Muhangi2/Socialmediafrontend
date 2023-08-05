import { response } from "express";
import PostModel from "../models/postmodel.js";
import UserModel from "../models/usermodel.js";

//lets do the crud functionality

//adding post
export const addpost = async (req, res) => {
  const newuser = new PostModel(req.body);
  try {
    await newuser.save();
    res.status(200).json("newpost added");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a post from the database
export const getpost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//updating a post of course depending on the id
export const updatepost = async (req, res) => {
  const findid = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(findid);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res
        .status(200)
        .json("post updated susccesfully you can check the mongodb database");
    } else {
      res.status(404).json("action forbidden");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
//delete the post
export const deletepost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("post deleted successfully");
    } else {
      res.status(404).json("action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//liking
export const likingpost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("post liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("post unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//fetchtimelineposts
const fetchposts = async (req, res) => {
  const id = req.params.id;
  try {
    const ownedposts = await PostModel.find({ userId: userId });
    const followedposts=await UserModel.aggregate([
      
    ])
  } catch (error) {}
};