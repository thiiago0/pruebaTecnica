import MyContext from "./MyContext";
import React, { useState } from "react";

export const MyApplicationContext = ({ children }) => {
  const logInfromStorage = localStorage.getItem("isLogged");
  const [isLogged, setIsLogged] = useState(logInfromStorage);

  let options = [
    { id: 1, nombre: "Home", enlace: "/" },
    { id: 2, nombre: "PokeAbout", enlace: "/pokeAbout" },
  ];

  return (
    <MyContext.Provider value={{ isLogged, setIsLogged, options }}>
      {children}
    </MyContext.Provider>
  );
};
