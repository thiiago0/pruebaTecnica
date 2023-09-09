import React from "react";
import { Home, PokeAbout } from "../pages";
import { Routes, Route } from "react-router-dom";

export const DashBoardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokeAbout" element={<PokeAbout />} />
    </Routes>
  );
};
