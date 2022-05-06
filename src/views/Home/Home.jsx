import React from "react";
import image from "../../assets/images/HomeImage.png"
import styles from "./Home.module.css"
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}><h1>Welcome!! Login to find your favorite music</h1></div>
      <div className={styles.subContainer}>
          <img src={image} alt="auriculares"/>
      </div>
    </div>
  );
}

export default Home;
