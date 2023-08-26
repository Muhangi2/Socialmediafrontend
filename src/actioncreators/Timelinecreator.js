import * as timelineposts from "../requests/Timelineposts";
export const getTimelineposts = (id) => async (dispatch) => {
  await dispatch({ type: "GETTING_POSTS_START" });
  try {
    const { data } = timelineposts.gettimelineposts(id);
    console.log(data);
    await dispatch({ type: "GETTING_POSTS_SUCCESSFULLY", data: data });
  } catch (error) {
    await dispatch({ type: "GETTING_POST_FAILURE" });
    console.log(error);
  }
};
