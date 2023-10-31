import { createContext, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  // state
  const [states, setStates] = useState([]);
  const [camps, setCamps] = useState([]);
  const [campToEdit, setCampToEdit] = useState(null);

  // return
  return (
    <primaryContext.Provider
      value={{
        camps,
        setCamps,
        states,
        setStates,
        campToEdit,
        setCampToEdit,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
