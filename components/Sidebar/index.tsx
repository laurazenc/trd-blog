import React from "react";
import { useI18n } from "../../context/I18nProvider";
import { useApi } from "../../hooks/useApi";
import ContentLoader from "react-content-loader";
import { Column, Text, Spacer, Flex } from "../";
import { Tile } from "./Tile";
import { useResponsive } from "../../context/Responsive";
import config from "../../config";
import Link from "next/link";

const SidebarLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={920}
      viewBox="0 0 250 920"
      backgroundColor="#fff"
      foregroundColor="#f3f3f3"
      uniqueKey="sidebar-placeholder"
    >
      <rect x="0" y={0} width="100" height="28" />
      {[0, 1, 2].map((r) => {
        return (
          <rect
            key={`pl-${r}`}
            x="0"
            y={r + (160 + 24) * r}
            width="250"
            height="160"
          />
        );
      })}
    </ContentLoader>
  );
};

const Content = () => {
  const { state, data = [] } = useApi("/posts?_sort=rank:DESC&_limit=5");

  if (state === "LOADING") return <SidebarLoader />;
  if (state === "ERROR") return null;
  if (state === "SUCCESS") {
    return (
      <>
        {data.length > 0
          ? data.map((post) => {
              return <Tile key={post.id} post={post} />;
            })
          : null}
      </>
    );
  }
  return null;
};

const Offers = () => {
  const { isResponsive } = useResponsive();
  const { t } = useI18n();

  return (
    <Link href={config.jugamosuna}>
      <a>
        <Column width={isResponsive ? "100%" : "250px"} height="160px">
          <img
            src="https://jugamosuna.es/tienda/img/jugamos-una-logo-1531143324.jpg"
            width={isResponsive ? "100%" : "250px"}
          />
          <Spacer height="32px" />

          <Text type="link" textDecoration="underline">
            {t("jugamosuna.text")}
          </Text>
        </Column>
      </a>
    </Link>
  );
};

export const Sidebar = () => {
  const { t } = useI18n();
  const { isResponsive } = useResponsive();

  return (
    <Column width={isResponsive ? "100%" : "250px"}>
      <Text type="h5">{t("more-popular")}</Text>
      <Spacer height="24px" />
      <Content />
      <Spacer height="72px" />
      <Text type="h5">{t("offers")}</Text>
      <Spacer height="24px" />
      <Offers />
    </Column>
  );
};
