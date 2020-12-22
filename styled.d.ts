import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      red: string;
      gray: string;
      lightGray: string;
      white: string;
      bg: string;
    };
  }
}
