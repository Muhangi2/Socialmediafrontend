import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getuserdata = (userid) => API.get(`/user/${userid}`);
export const updateUser = (id, newdata) =>
  API.put(`/user/${id}/update`, newdata);
export const getallusers = () => API.get("/user/");
export const followuser = (userId, user) =>
  API.put(`/user/${userId}/follow`, user);
export const unfollowuser = (userId, user) =>
  API.put(`/user/${userId}/unfollow`, user);
