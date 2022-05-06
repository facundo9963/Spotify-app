
import axios from "axios"
import getHeaderToken from "./getHeaderToken";

export const getAlbumsRequest = async (search) => {
    try {
      console.log("GET HEADER TOK", getHeaderToken())
      const query= search.trim().replaceAll(" ", "%20")
      console.log("ACA ESTA LA QUERY", query)
      const call =  await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album`, getHeaderToken()
      )
      console.log(call)
      return call;
    } catch (error) {
      console.log(error);
    }
  };