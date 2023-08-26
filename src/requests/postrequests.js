import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const addnewpost = (newpost) => API.post("post/addpost", newpost);

export const likepost = (id, userId) =>
  API.put(`post/${id}/liking`, { userId: userId });
