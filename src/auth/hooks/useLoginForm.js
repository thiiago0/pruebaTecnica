import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { users } from "../../user/users.json";
import MyContext from "../../context/MyContext";

export const useLoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();
  const { setIsLogged, setUserEmail } = useContext(MyContext);

  const handleChangeInput = (setState) => (e) => {
    setState(e.target.value);
  };
  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === Email && user.password === Password
    );
    if (Email != user.email || Password != user.password) {
      Swal.fire({
        title: "Error",
        text: "Email o contraseña incorrectos",
        icon: "error",
      });
      setIsLogged(false);
      setMensaje(" Email o password no valido");
      setEmail("");
      setPassword("");
      setMensaje("");
    } else {
      Swal.fire({
        title: "Success!",
        text: "User correct",
        icon: "success",
        confirmButtonText: "Go to home",
      });
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      localStorage.setItem("userEmail", user.email);
      setUserEmail(user.email);
      setEmail("");
      setPassword("");
      setMensaje("");
      navigate("/");
    }
  };

  return {
    setMensaje,
    mensaje,
    Email,
    Password,
    handleChangeInput,
    setEmail,
    setPassword,
    handleLogin,
  };
};
