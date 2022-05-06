import {  LOG_OUT, LOG_IN, GET_ALBUMS} from "./accions";


const initialState = {
    token:null,
    isAuthenticate:false,
    albums:[]
  };
  
  // REDUCER
  const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case LOG_IN:
        return { ...state, token: payload, isAuthenticate:true };
        case LOG_OUT:
            return {...initialState}
        case GET_ALBUMS:
          return{...state, albums: payload}
      default:
        return { ...state };
    }
  };
  
  export default reducer;