import { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const Theme = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [th, setTh] = useState("light");
  const toggle = (them) => {
    setTh(them === "light" ? "dark" : "light");
  };

  return <Theme.Provider value={{ th, toggle }}>{children}</Theme.Provider>;
};
