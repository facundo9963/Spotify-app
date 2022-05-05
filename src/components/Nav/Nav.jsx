import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav() {
    const location = useLocation()

    useEffect=(()=>{
        const urlParams=URLSearchParams(location.search)
        const spotifyCode=urlParams.get("code")
    },[location.search])

    const url= `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_CALLBACK_HOST}&scope=user-read-private`

    const handleLoginClick=()=>{
        window.location.replace(url)

    }


  const logged = localStorage.removeItem("token");
  return logged ?
   <div className={styles.container}>
       <button>Favorites</button>
       <button>Search</button>
       <button>Log out</button>
  </div> 
  : 
  <div className={styles.container}>
      <button  className={styles.loginButon} onClick={()=>handleLoginClick()}>Log in</button>
  </div>;
}

export default Nav;
