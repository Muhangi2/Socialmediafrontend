const initialstate = {
  authdata: null,
  loading: false,
  error: false,
};

 const authreducer = (state = initialstate, action) => {
    switch(action.type){
        case "AUTH_START":
            return {
                ...state,loading:true,error:false
            }
            case "AUTH_SUCCESS":
                localStorage.setItem("profile",JSON.stringify({...action?.data}))
                return {
                    ...state,authdata:action.data,loading:false,error:false
                } 
                case "AUTH_FAILURE":   
                return {
                    ...state,authdata:action.data,loading:false,error:true
                } 
            default:
               return state
    }
};
export default authreducer
