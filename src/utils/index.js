import apiCall from "../api";

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

    const call = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    console.log(call)
    return await call.json();
  } catch (error) {
    console.log(error);
  }
};
