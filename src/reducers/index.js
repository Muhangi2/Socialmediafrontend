import { combineReducers } from "redux";
import authreducer from "./Authreducer";
import postreducer from "./Postreducer";

export const reducers = combineReducers({ authreducer, postreducer });
