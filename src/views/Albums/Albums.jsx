import React from "react";

import AllAlbums from "../../components/AllAlbums/AllAlbums";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Albums.module.css"

function Albums() {
  return (
      <div className={styles.container}>

      <SearchBar/>
      <AllAlbums/>
      </div>
  )
}

export default Albums;