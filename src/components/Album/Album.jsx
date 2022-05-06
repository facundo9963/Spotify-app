import React from "react";
import styles from "./Album.module.css";
function Album({ image, name, releaseDate, albumType }) {
  const albumColor = () => {
    if (albumType === "single") {
      return styles.container1;
    } else if (albumType === "album") {
      return styles.container2;
    } else return styles.container3;
  };
  return (
    <div className={albumColor()}>
      <h1>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</h1>
      <div className={styles.containerImage}>
        <img className={styles.image} src={image.url} alt="portada" />
      </div>
      <span>{releaseDate}</span>
    </div>
  );
}

export default Album;
