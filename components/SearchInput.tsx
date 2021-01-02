import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Icon, Row, Flex } from ".";
import config from "../config";
import { useApp } from "../context/AppProvider";
import { light as colors } from "../theme/colors";

const InputWrapper = styled(Row)`
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(26, 26, 67, 0.1);
  input {
    border: none;
    outline: none;
    padding: 2px 8px;
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
  }

  @media (max-width: ${config.global.breakpoints.middle}px) {
    width: 100%;
  }
`;

export const SearchInput = () => {
  const { theme, search, updateSearch } = useApp();
  const router = useRouter();

  const keyPressed = ({ key }) => {
    if (key === "Enter" && search !== "") {
      router.push(`/search/${search}`);
    }
  };

  return (
    <InputWrapper justifyContent="space-between" alignItems="center">
      <input
        onKeyDown={keyPressed}
        onChange={(e) => updateSearch(e.target.value.toLocaleLowerCase())}
        value={search}
        placeholder="Buscar..."
      />
      <Flex
        width="40px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        margin="0 -1px 0 0"
        borderRadius="0 3px 3px 0"
        onClick={(e) => {
          e.preventDefault();
          if (search !== "") {
            router.push(`/search/${search}`);
          }
        }}
      >
        <Icon
          name="search"
          height="24px"
          width="24px"
          color={theme.colors.black}
        />
      </Flex>
    </InputWrapper>
  );
};
