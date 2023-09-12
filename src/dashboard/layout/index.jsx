import React from "react";
import { Header } from "../components";
import "./layout.css";
import { DashBoardRoutes } from "../routes/DashBoardRoutes";
export const Layout = ({ children }) => {
  return (
    <section className="layout-container">
      <Header />
      {children}
    </section>
  );
};
