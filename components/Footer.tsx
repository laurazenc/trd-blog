import React from "react";
import { Row } from "./Flex";
import { light as colors } from "../theme/colors";
import Link from "next/link";

export const Footer = () => {
  return (
    <Row
      width="100%"
      height="100px"
      backgroundColor={colors.black}
      justifyContent="center"
      alignItems="center"
      padding="24px 0"
    >
      <Link href="/">
        <a>
          <img src="/media/logo-two-lines.svg" alt="logo" />
        </a>
      </Link>
    </Row>
  );
};
