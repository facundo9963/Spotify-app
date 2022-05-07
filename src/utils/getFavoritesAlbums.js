import axios from "axios";
import getHeaderToken, { getScope } from "./getHeaderToken";

export const getFavoritesAlbums = async () => {
  try {
    const options = getHeaderToken();
    options.headers.scope = getScope();
    const call = await axios.get(
      `https://api.spotify.com/v1/me/albums`,
      getHeaderToken()
    );
    return call;
  } catch (error) {
    console.log(error);
  }
};
