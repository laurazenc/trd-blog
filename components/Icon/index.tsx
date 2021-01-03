import React from "react";
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

export const Icon = ({ name, width, height, color }: IIcon) => {
  const Svg = svgs[name];
  return <Svg {...{ width, height, color }} />;
};
