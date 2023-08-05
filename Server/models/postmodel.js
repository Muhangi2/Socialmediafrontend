import mongoose from "mongoose";

const postschema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    description: String,
    likes: [],
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.model("Posts", postschema);
export default PostModel;
