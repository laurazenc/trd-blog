import React from "react";
import { Column, Flex } from "./Flex";
import Header from "./Header";
import Meta from "./Meta";
import { Footer, Spacer } from "./";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useApp } from "../context/AppProvider";
import { useResponsive } from "../context/Responsive";
import { Sidebar } from "./Sidebar";
import config from "../config";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  p {
    margin: 0;
    padding: 0;
  }

  strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const Page: React.FunctionComponent = ({ children }) => {
  const { theme } = useApp();
  const { isResponsive } = useResponsive();
  return (
    <ThemeProvider theme={theme}>
      <Column
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        height="100vh"
        backgroundColor={theme.colors.bg}
      >
        <GlobalStyle />
        <Column>
          <Meta />
          <Flex width="100%" justifyContent="center">
            <Flex
              maxWidth={isResponsive ? "100%" : `${config.global.maxWidth}px`}
              width="100%"
              padding="0 16px"
            >
              <Header />
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="center">
            <Flex
              maxWidth={isResponsive ? "100%" : `${config.global.maxWidth}px`}
              padding="16px"
              flexDirection={isResponsive ? "column" : "row"}
            >
              {children}
              <Spacer width="56px" />
              <Sidebar />
            </Flex>
          </Flex>
        </Column>
        <Footer />
      </Column>
    </ThemeProvider>
  );
};

export default Page;
