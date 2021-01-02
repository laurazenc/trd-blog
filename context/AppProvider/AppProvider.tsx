import React, { useEffect, useState } from "react";
import config from "../../config";
import { theme as themes } from "../../theme";

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
  const [currentTheme, setCurrentTheme] = useState("light");
  const [theme, setTheme] = useState(themes.lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    setTheme(currentTheme === "light" ? themes.darkTheme : themes.lightTheme);
  };

  useEffect(() => {
    const themeCached = JSON.parse(
      localStorage.getItem(config.themeCached as string) as any
    ); // @ts-ignore
    if (themeCached) {
      setCurrentTheme(themeCached);
      setTheme(themeCached === "light" ? themes.lightTheme : themes.darkTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(config.themeCached, JSON.stringify(currentTheme));
  }, [currentTheme]);

  return (
    <AppContext.Provider
      value={{ search, updateSearch, theme, toggleTheme, currentTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext);
