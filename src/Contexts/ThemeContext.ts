import React, { createContext } from "react";

//Types
import { Value } from "../interfaces";

const ThemeContext: React.Context<Value | null> = createContext<Value | null>(
  null
);

export default ThemeContext;
