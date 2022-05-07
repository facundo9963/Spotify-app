import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Error404 from "../components/Error404/Error404";
import Albums from "../views/Albums/Albums";
import Favorites from "../views/Favorites/Favorites";
import Home from "../views/Home/Home";

const AppRoutes = () => {
  const auth=useSelector(state=>state.isAuthenticate)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={
        auth? <Albums />: <Home/>}/>
        <Route path="/favorites" element={
        auth? <Favorites/>: <Home/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;