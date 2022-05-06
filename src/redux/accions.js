import { authCall } from "../utils";
export const IS_AUTHENTICATE = "IS_AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";

export function authenticateUser(code) {
  return async (dispatch) => {
    try {
      const result = await authCall(code);
      console.log("result", result.access_token);
      if (result.access_token?.length > 1) {
        console.log("entre");
        localStorage.setItem("token", JSON.stringify(result));
        dispatch(logIn(result));
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
