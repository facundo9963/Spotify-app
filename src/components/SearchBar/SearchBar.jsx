import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAlbums } from "../../redux/accions";
import styles from "./SearchBar.module.css"
import { BsSearch } from 'react-icons/bs';
function SearchBar() {
    const dispatch= useDispatch()

    const [search, setSearch]=useState("");
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const validate=(value)=>{
        return value.length>=1 ?  true :  false ;
   
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate(search)){

            dispatch (getAlbums(search))
        }
        setSearch("");
    }


  return (
        <form  className={styles.container}>
        <input className={styles.input} type="text" placeholder="Search albums... " value={search} onChange={(e)=>handleChange(e)}/>
        <button className={styles.button}  onClick={(e)=>handleSubmit(e)}><BsSearch/></button>
        </form>

    
  )
}

export default SearchBar;