import chatModel from "../models/chatmodel.js";

export const createchat = async (req, res) => {
  const chat = new chatModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const result = await chat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const userchats = async (req, res) => {
  try {
    const chats = await chatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const findchat = async (req, res) => {
  try {
    const chat = await chatModel.findOne({
      members: { $all: [req.params.senderId, req.params.receiverId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(404).json(error);
  }
};
