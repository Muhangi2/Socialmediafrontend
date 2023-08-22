import * as Authapi from "../requests/Authrequest";

export const logindetails = (inputfield) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = Authapi.login(inputfield);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILURE" });
  }
};

//signup function
export const signupdetails = (inputfield) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = Authapi.signup(inputfield);
   
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "AUTH_FAILURE" });
  }
};
