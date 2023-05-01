import React from "react";

// Utils
import useWindowSize from "../../Utils/useWindowSize";

// Types
import { Props } from "../../interfaces";

// Contexts
import ThemeContext from "../../Contexts/ThemeContext";

const ThemeProvider = ({ children, theme }: Props) => {
  const windowSize = useWindowSize();

  return (
    <ThemeContext.Provider value={{ theme, windowSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
