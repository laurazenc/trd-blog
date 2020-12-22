import React, { useState } from "react";
import { Theme, theme as themes } from "../../theme";
interface IProvider {
  query?: string;
  children: React.ReactNode;
}

type ContextProps = {
  search: string;
  updateSearch: (s: string) => void;
  theme: any;
  toggleTheme: () => void;
  currentTheme: string;
};

const AppContext = React.createContext({} as ContextProps);

export const AppProvider = ({ query, children }: IProvider) => {
  const [search, updateSearch] = useState(query || "");
  const [currentTheme, setCurentTheme] = useState("light");
  const [theme, setTheme] = useState(themes.lightTheme);

  const toggleTheme = () => {
    setCurentTheme(currentTheme === "light" ? "dark" : "light");
    setTheme(currentTheme === "light" ? themes.darkTheme : themes.lightTheme);
  };

  return (
    <AppContext.Provider
      value={{ search, updateSearch, theme, toggleTheme, currentTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext);
