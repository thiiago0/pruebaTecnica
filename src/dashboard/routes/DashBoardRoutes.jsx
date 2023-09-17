import React from "react";
import { Home } from "../pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout";

export const DashBoardRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};
