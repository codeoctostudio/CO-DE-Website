import { useState, createContext } from "react";

export const CheckBoxContext = createContext();

const CheckBoxProvider = ({ children }) => {
  const [filter, setFilter] = useState("4+");
  const [radio, setRadio] = useState("newbie");

  return (
    <CheckBoxContext.Provider value={[radio, setRadio, filter, setFilter]}>
      {children}
    </CheckBoxContext.Provider>
  );
};

export default CheckBoxProvider;

