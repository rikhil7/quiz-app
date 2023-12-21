// importing required components
import React, { createContext, useState } from "react";

// exporitng context
export const AppContext = createContext();

// declaring a parent context
const ParentContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [click, setClick] = useState("home");
  const [score, setScore] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

//   returning the context with required
  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        click,
        setClick,
        score,
        setScore,
        isHovered,
        setIsHovered,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
