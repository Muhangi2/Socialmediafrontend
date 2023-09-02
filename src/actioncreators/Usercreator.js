import * as Userapi from "../requests/Userrequest.js";

export const updateUser = (id, newdata) => async (dispatch) => {
  console.log(id);
  console.log(newdata);
  dispatch({ type: "UPDATING_USER_START" });
  try {
    const data = await Userapi.updateUser(id, newdata);
    console.log(data);
    dispatch({ type: "UPDATING_USER", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATING_FAILED", error: error });
  }
};

export const userfollow = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: "FOLLOW_USER", data: id });
    await Userapi.followuser(id, user);
  } catch (error) {
    console.log(error);
  }
};
export const userunfollow = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: "UNFOLLOWUSER", data: id });
    await Userapi.unfollowuser(id, user);
  } catch (error) {
    console.log(error);
  }
};
