import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
=======
import Albums from "../views/Albums/Albums";
import Favorites from "../views/Favorites/Favorites";
>>>>>>> Stashed changes
import Home from "../views/Home/Home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
        <Route path="/albums" element={
        auth? <Albums />: <Home/>}/>
        <Route path="/favorites" element={
        auth? <Favorites/>: <Home/>}/>
>>>>>>> Stashed changes
      </Routes>
    </>
  );
};

export default AppRoutes;