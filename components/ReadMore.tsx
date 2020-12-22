import React from "react";
import { useI18n } from "../context/I18nProvider";
import { light as colors } from "../theme/colors";
import { Icon, Text, Row, Spacer } from "./";

export const ReadMore = () => {
  const { t } = useI18n();
  return (
    <Row justifyContent="center" alignItems="center">
      <Text type="link" color={colors.red} textTransform="uppercase">
        {t("read-more")}
      </Text>
      <Spacer width="4px" />
      <Icon name="row" />
    </Row>
  );
};
