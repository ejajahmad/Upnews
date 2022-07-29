import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return <Context.Provider value={{ openMenu, setOpenMenu }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
