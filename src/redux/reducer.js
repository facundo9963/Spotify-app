import {  LOG_OUT, LOG_IN} from "./accions";


const initialState = {
    token:null,
    isAuthenticate:false
  };
  
  // REDUCER
  const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case LOG_IN:
        return { ...state, token: payload, isAuthenticate:true };
        case LOG_OUT:
            return {...initialState}
      default:
        return { ...state };
    }
  };
  
  export default reducer;