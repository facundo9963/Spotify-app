import React, { useState } from "react";
import styles from "./Album.module.css";
import { useSpring, animated } from 'react-spring'
function Album({ image, name, releaseDate, albumType }) {

  ///ELEGIR EL CONTENEDOR SEGUN EL TIPO DE ALBUM PARA ESTILOS
  const albumColor = () => {
    if (albumType === "single") {
      return styles.container1;
    } else if (albumType === "album") {
      return styles.container2;
    } else return styles.container3;
  };


  /// FUNCIONES PARA DARLE EFECTO A LOS ALBUMS
  const calculateValues = (x, y) => [
    -(y - window.innerHeight / 2) / 15,
    (x - window.innerWidth / 2) / 15,
    1.1];
  const transformCard = (x, y, scale) =>
 `perspective(1000px) rotateX(${x}deg)
 rotateY(${y}deg) scale(${scale})`;

  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 2,
    tension: 300,
    friction: 10,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t
  };
  const props = useSpring({ xys, config });
 ////
  return (
    <animated.div className={albumColor()} style={{ transform: 
      props.xys.to(
       transformCard) }}
    onMouseLeave={() => set(
       [0, 0, 1])}
     onMouseMove={({ clientX: x,
      clientY: y }) => set( 
      calculateValues(x, y) )
     }>
      <h1>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</h1>
      <div className={styles.containerImage}>
        <img className={styles.image} src={image.url} alt="portada" />
      </div>
      <span>{releaseDate}</span>
    </animated.div>
  );
}

export default Album;
