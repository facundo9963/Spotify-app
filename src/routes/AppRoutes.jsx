import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Albums from "../views/Albums/Albums";
import Home from "../views/Home/Home";

const AppRoutes = () => {
  const auth=useSelector(state=>state.isAuthenticate)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={
        auth? <Albums />: <Home/>}
     />
      </Routes>
    </>
  );
};

export default AppRoutes;