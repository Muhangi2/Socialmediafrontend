import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });
export const login = (inputfield) => API.post("/auth/login", inputfield);
export const signup = (inputfield) => API.post("/auth/register", inputfield);
