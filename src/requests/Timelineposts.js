import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5001" });

export const gettimelineposts = (id) => {
  API.get(`/post/${id}/timeline`);
};
