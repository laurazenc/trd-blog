import React from "react";
import { useApp } from "../../context/AppProvider";
import * as svgs from "./svgs";

interface IIcon {
  name:
    | "instagram"
    | "calendar"
    | "search"
    | "eye"
    | "row"
    | "twitter"
    | "dice"
    | "logo"
    | "sun"
    | "logoTwoLines"
    | "moon";
  width?: string;
  height?: string;
  color?: string;
}

export const Icon = ({ name, width = "16", height = "16", color }: IIcon) => {
  const Svg = svgs[name];
  return <Svg {...{ width, height, color }} />;
};
