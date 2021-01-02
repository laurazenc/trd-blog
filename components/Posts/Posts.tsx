import React from "react";
import { LastPost, ColumnPost } from ".";
import ContentLoader from "react-content-loader";

import { Column, Spacer, Flex, Grid, Text } from "../index";
import { useI18n } from "../../context/I18nProvider";
import { useApi, apiStates } from "../../hooks/useApi";
import { useResponsive } from "../../context/Responsive";
import Seo, { ISeo } from "../Seo";

type PostsProps = {
  global: ISeo;
};

const PostsSkeleton = ({ isResponsive, vw }) => {
  const width = vw * 100 - 32;
  return !isResponsive ? (
    <ContentLoader
      speed={2}
      width={700}
      height={920}
      viewBox="0 0 700 920"
      backgroundColor="#fff"
      foregroundColor="#f3f3f3"
      uniqueKey="home-placeholder"
    >
      <rect x="0" y="0" width="400" height="300" />
      <rect x={400 + 16} y="0" width="250" height="20" />
      <rect x={400 + 16} y={16 + 18} width="250" height="62" />
      <rect x={400 + 16} y={16 + 18 + 62 + 16} width="250" height="20" />
      <rect
        x={400 + 16}
        y={16 + 18 + 62 + 16 + 20 + 16}
        width="250"
        height="20"
      />
      <rect
        x={400 + 16}
        y={16 + 18 + 62 + 16 + 20 + 16 + 20 + 16}
        width="250"
        height="20"
      />
      <rect x={0} y={300 + 40} width="330" height="250" />
      <rect x={0} y={300 + 40 + 250 + 16} width="300" height="20" />
      <rect x={0} y={300 + 40 + 250 + 16 + 20 + 16} width="100" height="20" />
      <rect
        x={0}
        y={300 + 40 + 250 + 16 + 20 + 16 + 20 + 16}
        width="330"
        height="20"
      />
      <rect
        x={0}
        y={300 + 40 + 250 + 16 + 20 + 16 + 20 + 16 + 20 + 16}
        width="330"
        height="20"
      />
      <rect x={330 + 20} y={300 + 40} width="330" height="250" />
      <rect x={330 + 20} y={300 + 40 + 250 + 16} width="300" height="20" />
      <rect
        x={330 + 20}
        y={300 + 40 + 250 + 16 + 20 + 16}
        width="100"
        height="20"
      />
      <rect
        x={330 + 20}
        y={300 + 40 + 250 + 16 + 20 + 16 + 20 + 16}
        width="330"
        height="20"
      />
      <rect
        x={330 + 20}
        y={300 + 40 + 250 + 16 + 20 + 16 + 20 + 16 + 20 + 16}
        width="330"
        height="20"
      />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={width}
      height={920}
      viewBox={`0 0 ${width} 920`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="home-placeholder"
    >
      <rect x={0} y={0} width={width} height="300" />
      <rect x={0} y={300 + 16} width={width / 2} height="20" />
      <rect x={0} y={300 + 16 + 20 + 16} width={100} height="20" />
      <rect x={0} y={300 + 16 + 20 + 16 + 20 + 16} width={width} height="20" />
      <rect
        x={0}
        y={300 + 16 + 20 + 16 + 20 + 16 + 20 + 16}
        width={width}
        height="20"
      />

      <rect
        x={0}
        y={300 + 16 + 20 + 16 + 20 + 16 + 20 + 16 + 20 + 16}
        width={width}
        height="300"
      />
    </ContentLoader>
  );
};

export const Posts = ({ global }: PostsProps) => {
  const { t } = useI18n();
  const { state, data = [] } = useApi("/posts?_sort=published_at:DESC");
  const { isResponsive, vw } = useResponsive();

  const seo = {
    ...global,
  };

  return (
    <>
      <Seo seo={seo} />
      <Column width={isResponsive ? "100%" : "700px"}>
        <Text type="h5">{t("reviews")}</Text>
        <Spacer height="24px" />
        <Flex>
          {state === apiStates.SUCCESS && data.length > 0 ? (
            <Column width="100%">
              <LastPost post={data[0]} />
              <Spacer height="40px" />
              <Grid>
                {data.slice(1).map((d: any) => {
                  return <ColumnPost post={d} key={d.id} />;
                })}
              </Grid>
            </Column>
          ) : (
            <PostsSkeleton {...{ isResponsive, vw }} />
          )}
        </Flex>
      </Column>
    </>
  );
};
