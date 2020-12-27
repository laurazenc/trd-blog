import React, { createContext, useContext, useState, useEffect } from "react";
import throttle from "lodash.throttle";
import config from "../config";

type ContextProps = {
  isResponsive: boolean;
  vw: number;
};

export const ResponsiveContext = createContext({} as ContextProps);
// @ts-ignore
export const ResponsiveProvider = ({ children }) => {
  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);
  const [isResponsive, setResponsive] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [vh]);

  useEffect(() => {
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    setResponsive(!!(vw * 100 < config.global.breakpoints.middle));
  }, [vw]);

  useEffect(() => {
    const handleResize = throttle(() => {
      // @ts-ignore
      if (window !== "undefined") {
        setVh(window.innerHeight * 0.01);
        setVw(window.innerWidth * 0.01);
        setResponsive(!!(window.innerWidth < config.global.breakpoints.tablet));
      }
    }, 200);
    window.addEventListener("resize", handleResize);
    setVh(window.innerHeight * 0.01);
    setVw(window.innerWidth * 0.01);
    setResponsive(!!(window.innerWidth < config.global.breakpoints.tablet));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ResponsiveContext.Provider value={{ isResponsive, vw }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};
