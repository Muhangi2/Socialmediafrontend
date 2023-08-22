import axios from "axios";

const API =axios.create({baseURL:"http://localhost:5001"})
export const login=(inputdata)=>API.post("/auth/login",inputdata);
export const signup=(inputdata)=>API.post("/auth/register",inputdata);


