<<<<<<< Updated upstream
import { authCall } from "../utils";
export const IS_AUTHENTICATE = "IS_AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
=======
import { authCall} from "../utils";
import {  getAlbumsRequest} from "../utils/getAlbumsRequest";
import { getFavoritesAlbums } from "../utils/getFavoritesAlbums";
export const IS_AUTHENTICATE = "IS_AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const GET_ALBUMS = "GET_ALBUMS";
export const GET_FAVORITES = "GET_FAVORITES";


>>>>>>> Stashed changes

export function authenticateUser(code) {
  return async (dispatch) => {
    try {
      const result = await authCall(code);
      console.log("result", result.access_token);
      if (result.access_token?.length > 1) {
        console.log("entre");
<<<<<<< Updated upstream
        localStorage.setItem("token", JSON.stringify(result));
        dispatch(logIn(result));
=======
        localStorage.setItem("token", JSON.stringify(result.data));
        console.log("Lo que se guarda en el storage", localStorage.getItem("token"))

        dispatch(logIn(result.data));
>>>>>>> Stashed changes
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function logIn(data) {
  return (dispatch) => {
    dispatch({
      type: LOG_IN,
      payload: data,
    });
  };
}
export function logOut() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: LOG_OUT,
      payload: null,
    });
  };
}
<<<<<<< Updated upstream
=======
export function getAlbums(search) {
  return async (dispatch) => {
    
    const albums= await getAlbumsRequest(search)
    console.log("ACA ESTAN LOS ALBUMS", albums)
    dispatch({
      type: GET_ALBUMS,
      payload: albums?.data.albums.items,
    });
  };
}
export function getFavorites() {
  return async (dispatch) => {
    
    const {data}= await getFavoritesAlbums()
    console.log("ACA ESTAN LOS ALBUMS", data)
    dispatch({
      type: GET_FAVORITES,
      payload: data.items,
    });
  };
}
>>>>>>> Stashed changes
