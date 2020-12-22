import React from "react";
import Link from "next/link";
import { Row, Spacer, Text } from ".";
import { useI18n } from "../context/I18nProvider";

export const Nav = () => {
  const { t } = useI18n();
  return (
    <Row>
      <Spacer width="24px" />
      <Link href="/posts">
        <a>
          <Text type="link">{t("reviews")}</Text>
        </a>
      </Link>
    </Row>
  );
};
