import React from "react";
import { useNavigate } from "react-router-dom";
import image404 from "../../assets/images/Error404.svg";
import styles from "./Error404.module.css";


const Error404 = () => {
  let navigate = useNavigate();
  
  const handleClick=()=>{
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <section className={styles["info-container"]}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p>
          Something has gone wrong. Its possible the internet is broken, or the
          world is ending. Either way, we're investigating the cause.
        </p>
        <button onClick={handleClick}>Go back home</button>
      </section>
      <img className={styles.image} src={image404} alt="Page not found" />
    </div>
  );
};

export default Error404;