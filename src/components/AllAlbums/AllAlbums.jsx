import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from "react-redux";
import styles from "./AllAlbums.module.css"
import Album from '../Album/Album';
import { getAlbums, getFavorites } from '../../redux/accions';
function AllAlbums() {
    const dispatch=useDispatch();
    const favoritesIDS=useSelector(state=>state.favoritesIds)
    useEffect(()=>{
        dispatch(getAlbums("Imagine"))
        dispatch(getFavorites())
    },[dispatch])
    const albums=useSelector(state=>state.albums)
  return (
    <div className={styles.container}>
        {albums && albums.map((album)=>{
            return(
                <Album
                liked={favoritesIDS.includes(album.id)}
                key={album.id}
                id={album.id}
                name={album.name}
                image={album.images? album.images[0]: false}
                releaseDate={album.release_date}
                albumType={album.album_type}
                />
            )
        })}
    </div>
  )
}

export default AllAlbums