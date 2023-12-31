import { FaHospitalUser } from "react-icons/fa";

const initialState = {
  posts: [],
  loading: false,
  error: false,
  uploading: false,
};

const postreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING_POST_START":
      return {
        ...state,
        uploading: false,
        error: false,
      };
    case "ADDING_POST":
      return {
        ...state,
        posts: [...state.posts, action.data],
        uploading: false,
        error: false,
      };
    case "ADDING_POST_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "LIKING_POST":
      return {
        ...state,
        posts: [...state, action.data],
        loading: false,
        error: false,
      };
    case "LIKING_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
export default postreducer;
