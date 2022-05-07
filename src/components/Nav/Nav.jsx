import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { authenticateUser, logOut } from "../../redux/accions";
import { useDispatch, useSelector } from "react-redux";

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

  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_CALLBACK_HOST}&scope=user-read-private user-read-email user-library-read`;

  const handleLoginClick = () => {
    window.location.replace(url);
  };
  const handleLogOutClick = () => {
    dispatch(logOut())
    navigate("/")
  };

  const logged = useSelector(state=>state.isAuthenticate)
  let navigate = useNavigate();
  return logged ? (
    <div className={styles.container}>
      <button className={styles.otherButtons} onClick={()=> navigate("/favorites")} >Favorites</button>
      <button className={styles.otherButtons} onClick={()=> navigate("/albums")}>Albums</button>
      <button className={styles.loginButton} onClick={()=> handleLogOutClick()}>Log out</button>
    </div>
  ) : (
    <div className={styles.container}>
      <button className={styles.loginButton} onClick={() => handleLoginClick()}>
        Log in
      </button>
    </div>
  );
}

export default Nav;
