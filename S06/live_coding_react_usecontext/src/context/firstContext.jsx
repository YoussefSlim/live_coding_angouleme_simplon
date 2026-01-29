import { createContext, useState } from "react";
// creer un context
export const FirstContext = createContext();

export default function FirstContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <FirstContext.Provider value={{ count, setCount }}>
      {children}
    </FirstContext.Provider>
  );
}
