import * as Authapi from "../requests/Authrequest";

export const logindetails = (inputfield) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.login(inputfield); // use await here
    dispatch({ type: "AUTH_SUCCESS", data: data}); // use payload here
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILURE", data: error }); // use payload here
  }
};

//signup function
export const signupdetails = (inputfield) => async (dispatch) => {
  console.log(inputfield);
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.signup(inputfield);
    console.log(data); // use await here
    dispatch({ type: "AUTH_SUCCESS", data: data}); // use payload here
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILURE", data: error }); // use payload here
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

