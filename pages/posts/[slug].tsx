import React from "react";
import {
  Column,
  Text,
  Image,
  Spacer,
  Summary,
  PostResume,
  Rank,
} from "../../components";
import Seo, { ISeo } from "../../components/Seo";
import { useI18n } from "../../context/I18nProvider";
import { useResponsive } from "../../context/Responsive";
import { fetchAPI } from "../../hooks/useApi";
import { Post } from "../../types";
import { buildUrl } from "../../utils/buildUrl";

type PostDetailProps = {
  post: Post;
  global: ISeo;
};

const PostDetail = ({ post, global }: PostDetailProps) => {
  const { t } = useI18n();
  const { isResponsive } = useResponsive();
  const seo = {
    ...global,
    MetaTitle: post.title,
    MetaDescription: post.resume,
    ShareImage: post.cover,
  };

  return (
    <>
      {post && <Seo seo={seo} />}
      <Column width={isResponsive ? "100%" : "700px"}>
        <Text type="h1">{post.title}</Text>
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
        <Spacer height="24px" />
        <Image
          image={post.cover}
          width={isResponsive ? undefined : 700}
          height={300}
        />
        <Spacer height="24px" />
        <Text type="body1">{post.resume}</Text>
        <Spacer height="24px" />
        <Summary {...{ ...post.summary }} />
        <Spacer height="24px" />
        {post.the_box && (
          <>
            <Text type="h3">{t("the_box.title")}</Text>
            <Spacer height="24px" />
            <Text type="body1">{post.the_box}</Text>
            <Spacer height="24px" />
          </>
        )}
        {post.goal && (
          <>
            <Text type="h3">{t("goal.title")}</Text>
            <Spacer height="24px" />
            <Text type="body1">{post.goal}</Text>
            <Spacer height="24px" />
            {post.goal_image && (
              <>
                <Image
                  image={post.goal_image}
                  width={isResponsive ? undefined : 700}
                  height={300}
                />
                <Spacer height="24px" />
              </>
            )}
          </>
        )}
        <Text type="h3">{t("how_to_play.title")}</Text>
        <Spacer height="24px" />
        <Text type="body1">{post.how_to_play}</Text>
        <Spacer height="24px" />

        {post.how_to_play_image && (
          <>
            <Image
              image={post.how_to_play_image}
              width={isResponsive ? undefined : 700}
              height={300}
            />
            <Spacer height="24px" />
          </>
        )}
        <Text type="h3">{t("thoughts.title")}</Text>
        <Spacer height="24px" />
        <Text type="body1">{post.thoughts}</Text>
        <Spacer height="24px" />
        <Rank rank={post.rank} />
        <Spacer height="48px" />
      </Column>
    </>
  );
};

PostDetail.getInitialProps = async (ctx: any) => {
  const { query } = ctx;
  let res = await fetch(buildUrl(`/posts?slug=${query.slug}`));
  const global = await fetchAPI("/global");
  res = await res.json();
  return { post: res[0], global };
};

export default PostDetail;
