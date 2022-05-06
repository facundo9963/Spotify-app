import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { authenticateUser } from "../../redux/accions";
import { useDispatch } from "react-redux";

function Nav() {
  const location = useLocation();
  const dispatch= useDispatch();
  console.log(location);
  
  
  useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const spotifyCode = urlParams.get("code");
    
    console.log("en el use efect", spotifyCode)
    if (spotifyCode !== null && !localStorage.getItem("token")) {
        dispatch(authenticateUser(spotifyCode))}
    console.log(spotifyCode);
    
}, [location.search, dispatch]);

  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_CALLBACK_HOST}&scope=user-read-private`;

  const handleLoginClick = () => {
    window.location.replace(url);
  };

  const logged = localStorage.getItem("isAuthenticated");
  return logged ? (
    <div className={styles.container}>
      <button>Favorites</button>
      <button>Search</button>
      <button>Log out</button>
    </div>
  ) : (
    <div className={styles.container}>
      <button className={styles.loginButon} onClick={() => handleLoginClick()}>
        Log in
      </button>
    </div>
  );
}

export default Nav;
