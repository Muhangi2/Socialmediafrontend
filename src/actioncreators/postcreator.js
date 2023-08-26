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
    const liking = postdata.likepost(id);
    dispatch({ type: "LIKING_POST", data: liking });
    console.log(liking);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LIKING_FAILURE", data: error }); // use payload here
  }
};
