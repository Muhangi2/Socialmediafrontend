import * as postdata from "../requests/postrequests";

export const postcreator = (newpost) => async (dispatch) => {
  dispatch({ type: "ADDING_POST_START" });
  try {
    console.log(newpost);
    const data = await postdata.addnewpost(newpost);
    console.log(data);
    dispatch({ type: "ADDING_POST", data: newpost });
    console.log(newpost);
  } catch (error) {
    dispatch({ type: "ADDING_POST_FAILED" });
    console.log(error);
  }
};
