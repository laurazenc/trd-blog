import Link from "next/link";
import React from "react";
import { Flex, Column, Image, Text, Spacer, PostResume } from "..";
import { light as colors } from "../../theme/colors";
import { Post } from "../../types";

type ColumnPostProps = {
  post: Post;
};

export const ColumnPost = ({ post }: ColumnPostProps) => {
  return (
    <Link as={`/posts/${post.slug}`} href="/posts/[slug]" shallow={true}>
      <a>
        <Column width="330px">
          <Flex height="250px" width="330px">
            <Image image={post.cover} width={330} height={250} />
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
      </a>
    </Link>
  );
};
