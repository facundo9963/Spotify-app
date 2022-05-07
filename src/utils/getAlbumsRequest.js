import axios from "axios";
import getHeaderToken from "./getHeaderToken";

export const getAlbumsRequest = async (search) => {
  try {
    const query = search.trim().replaceAll(" ", "%20");

    const call = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=album`,
      getHeaderToken()
    );

    return call;
  } catch (error) {
    console.log(error);
  }
};
