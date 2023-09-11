import { useContext } from "react";
import MyContext from "../context/MyContext";

export const useLogout = () => {
  const { setIsLogged } = useContext(MyContext);

  const handlerLogout = () => {
    localStorage.setItem("isLogged", false);
    setIsLogged(false);
  };
  return { handlerLogout };
};
