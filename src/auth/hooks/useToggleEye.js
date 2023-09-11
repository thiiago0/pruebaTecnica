import { useState } from "react";

export const useToggleEye = (initialVisibility = false) => {
  const [passwordVisible, setPasswordVisible] = useState(initialVisibility);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return { passwordVisible, togglePasswordVisibility };
};
