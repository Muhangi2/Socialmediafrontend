const authreducer = (
  state = { authdata: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: false,
        error: false,
      };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authdata: action.data,
        loading: false,
        error: false,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        authdata: action.data,
        loading: false,
        error: true,
      };
    case "UPDATING_USER_START":
      return {
        ...state,
        loading: false,
        error: false,
      };

    case "UPDATING_USER":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authdata: action.data,
        loading: false,
        error: false,
      };
    case "UPDATING_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "FOLLOW_USER":
      return {
        ...state,
        authdata: {
          ...state.authdata,
          user: {
            ...state.authdata.user,
            following: [...state.authdata.user.following, action.data],
          },
        },
      };

    case "UNFOLLOWUSER":
      return {
        ...state,
        authdata: {
          ...state.authdata,
          user: {
            ...state.authdata.user,
            following: [
              ...state.authdata.user.following.filter(
                (personId) => personId !== action.data
              ),
            ],
          },
        },
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        authdata: null,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
export default authreducer;
