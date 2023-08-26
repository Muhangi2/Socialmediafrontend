import mongoose from "mongoose";

const postschema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    description: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.model("Posts", postschema);
export default PostModel;
