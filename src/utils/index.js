import axios from "axios"

const commonParams = {
  redirect_uri: process.env.REACT_APP_CALLBACK_HOST,
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
};

export const authCall = async (code) => {
  try {
    const params = {
        code,
      grant_type: "authorization_code",
      ...commonParams,
    };

    const searchParams = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");
    const call = await axios.post("https://accounts.spotify.com/api/token", searchParams, {headers:{
      "Content-type": "application/x-www-form-urlencoded"
    }})

    return call;
  } catch (error) {
    console.log(error);
  }
};
