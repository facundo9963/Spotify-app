import { authCall } from "../utils";
import { getAlbumsRequest } from "../utils/getAlbumsRequest";
import { getFavoritesAlbums } from "../utils/getFavoritesAlbums";
export const IS_AUTHENTICATE = "IS_AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const GET_ALBUMS = "GET_ALBUMS";
export const GET_FAVORITES = "GET_FAVORITES";

export function authenticateUser(code) {
  return async (dispatch) => {
    try {
      const result = await authCall(code);

      if (result.data.access_token.length > 1) {
        localStorage.setItem("token", JSON.stringify(result.data));

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
    const albums = await getAlbumsRequest(search);

    dispatch({
      type: GET_ALBUMS,
      payload: albums?.data.albums.items,
    });
  };
}
export function getFavorites() {
  return async (dispatch) => {
    const { data } = await getFavoritesAlbums();

    dispatch({
      type: GET_FAVORITES,
      payload: data.items,
    });
  };
}
