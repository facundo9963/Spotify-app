import { authCall} from "../utils";
import {  getAlbumsRequest} from "../utils/getAlbumsRequest";
export const IS_AUTHENTICATE = "IS_AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const GET_ALBUMS = "GET_ALBUMS";


export function authenticateUser(code) {
  return async (dispatch) => {
    try {
      const result = await authCall(code);
      console.log("result", result);
      if (result.data.access_token.length > 1) {
        console.log("entre");
        localStorage.setItem("token", JSON.stringify(result.data.access_token));
        console.log("Lo que se guarda en el storage", localStorage.getItem("token"))

        dispatch(logIn(result.data));
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
