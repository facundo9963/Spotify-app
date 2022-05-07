<<<<<<< Updated upstream
import {  LOG_OUT, LOG_IN} from "./accions";
=======
import {  LOG_OUT, LOG_IN, GET_ALBUMS, GET_FAVORITES} from "./accions";
>>>>>>> Stashed changes


const initialState = {
    token:null,
<<<<<<< Updated upstream
    isAuthenticate:false
=======
    isAuthenticate:false,
    albums:[],
    favorites:[],
>>>>>>> Stashed changes
  };
  
  // REDUCER
  const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case LOG_IN:
        return { ...state, token: payload, isAuthenticate:true };
        case LOG_OUT:
            return {...initialState}
<<<<<<< Updated upstream
=======
        case GET_ALBUMS:
          return{...state, albums: payload}
        case GET_FAVORITES:
          return{...state, favorites:payload}
>>>>>>> Stashed changes
      default:
        return { ...state };
    }
  };
  
  export default reducer;