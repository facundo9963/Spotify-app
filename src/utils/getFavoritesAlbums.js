import axios from "axios"
import getHeaderToken, { getScope } from "./getHeaderToken";

export const getFavoritesAlbums= async () => {
    try {
      console.log("GET HEADER TOK", getHeaderToken())

      const options=getHeaderToken()
      options.headers.scope=getScope();
      const call =  await axios.get(`https://api.spotify.com/v1/me/albums`, getHeaderToken())
      console.log("ACA ESTAN LOS FAVORITOS", call)
      return call;
    } catch (error) {
      console.log(error);
    }
  }; 