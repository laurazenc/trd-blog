import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Icon, Row, Flex } from ".";
import config from "../config";
import { useApp } from "../context/AppProvider";
import { light as colors } from "../theme/colors";

const InputWrapper = styled(Row)`
  width: 200px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 2px;
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
  const { search, updateSearch } = useApp();
  const router = useRouter();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <InputWrapper justifyContent="space-between" alignItems="center">
      <input
        onChange={(e) => updateSearch(e.target.value.toLocaleLowerCase())}
        value={search}
      />
      <Flex
        width="30px"
        height="30px"
        justifyContent="center"
        alignItems="center"
        margin="0 -1px 0 0"
        backgroundColor={colors.red}
        onClick={(e) => {
          e.preventDefault();
          if (search !== "") {
            router.push(`/search/${search}`);
          }
        }}
      >
        <Icon name="search" height="24px" width="24px" />
      </Flex>
    </InputWrapper>
  );
};
