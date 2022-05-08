import axios from "axios";
import getHeaderToken from "./getHeaderToken";

export const addFavoritesAlbums = async (id) => {
  try {
    
    const call = await axios.put(
      `https://api.spotify.com/v1/me/albums?ids=${id}`, "", 
      getHeaderToken()
    );
    return call;
  } catch (error) {
    console.log(error);
  }
};
