import React from "react";
import image from "../../assets/images/HomeImage.png"
import styles from "./Home.module.css"
import { useSpring, animated } from 'react-spring'

function Home() {

  const animate = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
    config: {
      duration: 2000,
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}  >
        <animated.h1 style={animate}>Welcome!! Login to find your favorite music</animated.h1>
        </div>
      <div className={styles.subContainer}>
          <img src={image} alt="auriculares"/>
      </div>
    </div>
  );
}

export default Home;
