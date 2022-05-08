import { authCall } from "../utils";
import { addFavoritesAlbums } from "../utils/addFavoritesAlbums";
import { errorAlert, successAlert, successAlertDark} from "../utils/alerts";
import { deleteFavoritesAlbums } from "../utils/deleteFavoritesAlbums";
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
    successAlert("You logged in successfully")
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
   try{
     const albums = await getAlbumsRequest(search);
     dispatch({
       type: GET_ALBUMS,
       payload: albums?.data.albums.items,
     });
     search!=="Imagine" && successAlert(`${albums?.data.albums.items.length} results were found`)
  } catch(e){
    errorAlert("Not found")
  }
     

  };
}
export function getFavorites() {
  return async (dispatch) => {
    try{

      const { data } = await getFavoritesAlbums();
  
      dispatch({
        type: GET_FAVORITES,
        payload: data.items,
      });
    }catch(e){
      errorAlert("Favorites not found")
    }
  };
}
export function addFavorites(id) {
  return async (dispatch) => {
    try{
      await addFavoritesAlbums(id);
      dispatch(getFavorites())
      successAlert("Favorite added")
    }catch(e){
      errorAlert("Could not add a favorite")
    }
  };
}
export function deleteFavorites(id) {
  return async (dispatch) => {
    try{
      await deleteFavoritesAlbums(id);
      dispatch(getFavorites())
      successAlertDark("Favorite deleted")

    }catch(e){
      errorAlert("Could not delete a favorite")
    }
  };
}
