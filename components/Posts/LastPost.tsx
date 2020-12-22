import React from "react";
import { Post } from "../../types";
import { light as colors } from "../../theme/colors";
import { Column, Spacer, Image, Text, Flex, PostResume } from "..";
import Link from "next/link";
import { useResponsive } from "../../context/Responsive";

type LastPostProps = {
  post: Post;
};

export const LastPost = ({ post }: LastPostProps) => {
  const { isResponsive } = useResponsive();
  return (
    <Link as={`/posts/${post.slug}`} href="/posts/[slug]" shallow={true}>
      <a>
        <Flex flexDirection={isResponsive ? "column" : "row"}>
          <Flex height="300px" width="100%">
            <Image
              height={300}
              width={isResponsive ? undefined : 400}
              image={post.cover}
            />
          </Flex>
          <Column
            margin={isResponsive ? "0" : "0 0 0 16px"}
            alignItems="flex-start"
          >
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
            <Spacer height="18px" />
            <Text type="h1">{post.title}</Text>
            <Spacer height="14px" />
            <Text type="body2" color={colors.gray}>
              {post.resume}
            </Text>
          </Column>
        </Flex>
      </a>
    </Link>
  );
};
