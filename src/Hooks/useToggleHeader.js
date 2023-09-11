import { useState } from "react";

export const useToggleHeader = () => {
  const [show, setShow] = useState(false);

  const handlerToggleOn = () => {
    setShow(!show);
  };
  return { show, handlerToggleOn };
};
