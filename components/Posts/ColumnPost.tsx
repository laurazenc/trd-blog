import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Flex, Column, Image, Text, Spacer, PostResume } from "..";
import { light as colors } from "../../theme/colors";
import { Post } from "../../types";
import { useResponsive } from "../../context/Responsive";
import config from "../../config";

type ColumnPostProps = {
  post: Post;
};

const Anchor = styled.a`
  &:nth-of-type(odd) {
    margin-right: 27px;
  }
  @media (max-width: ${config.global.breakpoints.middle}px) {
    width: 100%;
    &:nth-of-type(odd) {
      margin-right: 0;
    }
  }
`;

export const ColumnPost = ({ post }: ColumnPostProps) => {
  const { isResponsive } = useResponsive();
  return (
    <Link as={`/posts/${post.slug}`} href="/posts/[slug]" shallow={true}>
      <Anchor>
        <Column width={isResponsive ? "100%" : "330px"}>
          <Flex height="250px" width={isResponsive ? "100%" : "330px"}>
            <Image
              image={post.cover}
              width={isResponsive ? undefined : 330}
              height={250}
            />
          </Flex>
          <Spacer height="16px" />
          <PostResume
            {...{
              published_at: post.published_at,
              text: [
                post.title,
                post.resume,
                post.the_box,
                post.how_to_play,
                post.goal,
                post.thoughts,
              ],
            }}
          />
          <Spacer height="16px" />
          <Text type="h4">{post.title}</Text>
          <Spacer height="16px" />
          <Text type="body2" color={colors.gray}>
            {post.resume}
          </Text>
          <Spacer height="32px" />
        </Column>
      </Anchor>
    </Link>
  );
};
