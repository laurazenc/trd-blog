import React from "react";
import { LastPost, ColumnPost } from ".";
import { Column, Spacer, Flex, Grid, Text } from "../index";
import { useI18n } from "../../context/I18nProvider";
import { useApi, apiStates } from "../../hooks/useApi";
import { useResponsive } from "../../context/Responsive";

export const Posts = () => {
  const { t } = useI18n();
  const { state, data = [] } = useApi("/posts?_sort=published_at:DESC");
  const { isResponsive } = useResponsive();
  return (
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
          <div>no posts</div>
        )}
      </Flex>
    </Column>
  );
};
