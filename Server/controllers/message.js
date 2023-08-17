import messageModel from "../models/messagemodel.js";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new messageModel({ chatId, senderId, text });

  try {
    const newmessage = await message.save();
    res.status(200).json(newmessage);
  } catch (error) {
    res.status(400).json(error);
  }
};
//getting the chat
export const getmessage = async (req, res) => {
  const { chatId } = req.params;
  try {
    const message = await messageModel.find({ chatId });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json(error);
  }
};
