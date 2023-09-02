import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const addnewpost = (newpost) => API.post("post/addpost", newpost);

export const likepost = async (id, userId) => {
  try {
    const response = await API.put(`post/${id}/liking`, { userId: userId });
    return response.data;
  } catch (error) {
    console.error("Error liking post:", error);
    throw error;
  }
};
