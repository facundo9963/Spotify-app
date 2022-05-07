import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFavorites } from '../../redux/accions'
import CoverFlow from 'coverflow-react';


function Favorites() {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getFavorites())
    })
  return (
    <div>
      <CoverFlow imagesArr={imagesArr}
  direction="horizontal"
  width="1360"
  height="250"
  itemRatio="8:5"
  background="#333333"
   />
    </div>
  )
}

export default Favorites