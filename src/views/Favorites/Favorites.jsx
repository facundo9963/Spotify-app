import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/accions";
import styles from "./Favorites.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Album from "../../components/Album/Album";

function Favorites() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

//// aca se extrae la informacion del estado global

  const favorites = useSelector((state) => state.favorites);
  const albums = favorites.map((favorite) => {
    const images=favorite.album.images ? favorite.album.images : false;
    const name= favorite.album.name? favorite.album.name: false;
    const releaseDate=favorite.album.release_date? favorite.album.release_date: false
    const albumType=favorite.album.type? favorite.album.type: false
    return {images, name, releaseDate,albumType}
  });
////


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect:true,  
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My favorites albums</h1>
      {albums.length ? (
        <div className={styles.slider}>

        <Slider {...settings} >
          {albums.map((album, i) => {
            return (
              
              <Album
              key={i}
              image={album.images[0]}
              name={album.name}
              releaseDate={album.releaseDate}
              albumType={album.albumType}
              />
              
              );
            })}
        </Slider>
            </div>
      ) : (
        false
      )}
    </div>
  );
}

export default Favorites;
