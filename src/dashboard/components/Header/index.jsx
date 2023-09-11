import React from "react";
import logo from "../../../assets/pokedex.png";
import "./header.css";
import { useToggleHeader } from "../../../Hooks/useToggleHeader";
import { LogOutButton } from "../LogOutButton";

export const Header = () => {
  const { show, handlerToggleOn } = useToggleHeader();

  return (
    <div className="container-header">
      <div className="logo">
        <img className="logo-img" src={logo} alt="" />
      </div>
      <div className="active" onClick={handlerToggleOn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-person-check"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
        </svg>
      </div>
      {show && <LogOutButton />}
    </div>
  );
};
