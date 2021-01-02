import Link from "next/link";
import React from "react";
import styled from "styled-components";
import config from "../config";
import { useApp } from "../context/AppProvider";
import { useResponsive } from "../context/Responsive";
import { Row, Spacer, Icon, Flex } from "./";
import { SearchInput } from "./SearchInput";

const IconWrapper = styled.div`
  @media (max-width: ${config.global.breakpoints.middle}px) {
    padding: 16px 0;
  }
`;

const Header = () => {
  const { currentTheme, theme, toggleTheme } = useApp();
  const { isResponsive } = useResponsive();
  return (
    <Flex
      height={isResponsive ? "170px" : "80px"}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isResponsive ? "column" : "row"}
    >
      <Row alignItems="center">
        <Link href="/">
          <a>
            <IconWrapper>
              <Icon
                name={isResponsive ? "logoTwoLines" : "logo"}
                height={isResponsive ? "80px" : "40px"}
                color={theme.colors.black}
              />
            </IconWrapper>
          </a>
        </Link>
      </Row>
      <Flex
        flexDirection={isResponsive ? "column" : "row"}
        alignItems="center"
        width={isResponsive ? "100%" : "auto"}
      >
        <SearchInput />
        {isResponsive ? <Spacer height="16px" /> : <Spacer width="16px" />}
        <Flex>
          <Link href={config.instagram}>
            <a>
              <Icon
                name="instagram"
                width="24px"
                height="24px"
                color={theme.colors.black}
              />
            </a>
          </Link>
          <Spacer width="16px" />
          <Link href={config.twitter}>
            <a>
              <Icon
                name="twitter"
                width="24px"
                height="24px"
                color={theme.colors.black}
              />
            </a>
          </Link>
          <Spacer width="16px" />
          <div onClick={() => toggleTheme()}>
            <Icon
              name={currentTheme === "light" ? "moon" : "sun"}
              width="24px"
              height="24px"
              color={theme.colors.black}
            />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
