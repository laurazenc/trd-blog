import { DefaultTheme } from "styled-components";
import * as colors from "./colors";

const lightTheme: DefaultTheme = {
  colors: colors.light,
};

const darkTheme: DefaultTheme = {
  colors: colors.dark,
};

export type Theme = typeof darkTheme;

export const theme = { lightTheme, darkTheme };
