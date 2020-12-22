import styled from "styled-components";
import { Post } from "../../types";
import { Flex, Image, Text, Icon, Spacer } from "../";
import { light as colors } from "../../theme/colors";
import { useResponsive } from "../../context/Responsive";
import React from "react";

type TileProps = {
  post: Post;
};

const TileWrapper = styled(Flex)`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 160px;
  background: linear-gradient(
    180deg,
    rgba(34, 44, 70, 0.0375) 0%,
    rgba(51, 51, 51, 0.75) 100%
  );
  z-index: 1;
  opacity: 0.75;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 0 16px 16px;
`;

const Rank = styled(Flex)`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 8px;
  right: 0px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  img,
  svg {
    right: 0;
  }

  h5 {
    position: absolute;
    z-index: 4;
    right: 0;
    width: 60px;
    text-align: center;
  }
`;

export const Tile = ({ post }: TileProps) => {
  const { isResponsive } = useResponsive();
  return (
    <>
      <TileWrapper width={isResponsive ? "100%" : "250px"}>
        <Image
          height={160}
          width={isResponsive ? undefined : 250}
          image={post.cover}
        />
        <Overlay />
        <Title>
          <Text type="h4" color={colors.white}>
            {post.title}
          </Text>
        </Title>
        <Rank>
          <Icon height={"50px"} width={"50px"} name="dice" />
          <Text type="h5" withMarkdown={false} color={colors.white}>
            {post.rank}
          </Text>
        </Rank>
      </TileWrapper>
      <Spacer height="24px" />
    </>
  );
};
