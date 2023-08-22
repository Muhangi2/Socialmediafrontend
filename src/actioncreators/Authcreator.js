import * as Authapi from "../requests/Authrequest";
export const logindetails = (inputdata) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = Authapi.login(inputdata);
   
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILURE" });
  }
};

//signup function
export const signupdetails = (inputdata) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
      const { data } = Authapi.signup(inputdata);
     
      dispatch({ type: "AUTH_SUCCESS", data: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "AUTH_FAILURE" });
    }
  };
  
