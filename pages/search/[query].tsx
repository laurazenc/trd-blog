import React from "react";
import { useI18n } from "../../context/I18nProvider";
import { useResponsive } from "../../context/Responsive";
import { Column, Text, Grid, Spacer, ColumnPost } from "../../components";
import { buildUrl } from "../../utils/buildUrl";
import { Post } from "../../types";

const Query = ({ results }) => {
  const { t } = useI18n();
  const { isResponsive } = useResponsive();

  return (
    <Column width={isResponsive ? "100%" : "700px"}>
      <Text type="h5">{t("results")}</Text>
      <Spacer height="24px" />

      {!results || results.length === 0 ? (
        <Text type="body1">{t("no-results")}</Text>
      ) : (
        <Grid>
          {results.map((r: Post) => {
            return <ColumnPost key={r.id} post={r} />;
          })}
        </Grid>
      )}
    </Column>
  );
};

Query.getInitialProps = async (ctx: any) => {
  const { query } = ctx;
  let res = await fetch(buildUrl(`/posts?title_contains=${query.query}`));
  res = await res.json();
  return { results: res };
};

export default Query;
