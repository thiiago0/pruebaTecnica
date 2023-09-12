import MyContext from "./MyContext";
import React, { useState } from "react";

export const MyApplicationContext = ({ children }) => {
  const logInfromStorage = localStorage.getItem("isLogged");
  const userNameFromStorage = localStorage.getItem("userEmail") || "";
  const [isLogged, setIsLogged] = useState(logInfromStorage);
  const [userEmail, setUserEmail] = useState(userNameFromStorage);

  let options = [
    { id: 1, nombre: "Home", enlace: "/" },
    { id: 2, nombre: "PokeAbout", enlace: "/pokeAbout" },
  ];

  return (
    <MyContext.Provider
      value={{ isLogged, setIsLogged, options, userEmail, setUserEmail }}
    >
      {children}
    </MyContext.Provider>
  );
};
