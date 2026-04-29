import { createContext, useContext } from "react";
import {useTheme} from "../hooks/ThemeHooks";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const themeData = useTheme();

  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  return useContext(ThemeContext);
}

/* eslint-disable react-refresh/only-export-components */
export { ThemeProvider, useThemeContext };
