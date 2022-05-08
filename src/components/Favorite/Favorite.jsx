import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/accions";

import styles from "./Favorite.module.css";

const Favorite = ({ id, liked = false }) => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  useEffect(()=>{
    
  },[refresh])
  const handleLike = () => {
    if (liked) {
      dispatch(deleteFavorites(id));
      setRefresh(!refresh);
    } else {
      dispatch(addFavorites(id));
      setRefresh(!refresh);
    }
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.toggleHeart}
        id={styles.toggleHeart + id}
        type="checkbox"
        checked={liked}
        onChange={handleLike}
      />
      <label
        className={styles.toggleHeartFor}
        htmlFor={styles.toggleHeart + id}
        aria-label="like"
      >
        ❤
      </label>
    </div>
  );
};

export default Favorite;
