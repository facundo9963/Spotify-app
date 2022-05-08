import {  LOG_OUT, LOG_IN, GET_ALBUMS, GET_FAVORITES} from "./accions";


const initialState = {
    token:null,
    isAuthenticate:false,
    albums:[],
    favorites:[],
    favoritesIds:[]
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
        case GET_FAVORITES:
          return{...state, favorites:payload, favoritesIds: payload.map((fav)=> fav.album?.id)}
      default:
        return { ...state };
    }
  };
  
  export default reducer;