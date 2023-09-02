import { wait } from "@testing-library/user-event/dist/utils";
import * as postdata from "../requests/postrequests";

export const postcreator = (newpost) => async (dispatch) => {
  dispatch({ type: "ADDING_POST_START" });
  try {
    console.log(newpost);
    console.log(await postdata.addnewpost(newpost));
    const { data } = await postdata.addnewpost(newpost);
    console.log(data);
    dispatch({ type: "ADDING_POST", data: data });
    console.log(newpost);
  } catch (error) {
    dispatch({ type: "ADDING_POST_FAILED" });
    console.log(error);
  }
};
export const likecreator = (id, userId) => async (dispatch) => {
  try {
    const liking = await postdata.likepost(id, userId);
    dispatch({ type: "LIKING_POST", data: liking });
  } catch (error) {
    console.error("Error in likecreator:", error);
    dispatch({ type: "LIKING_FAILURE", data: error });
  }
};
