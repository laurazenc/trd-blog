import React from "react";
import styled from "styled-components";
import { useI18n } from "../context/I18nProvider";
import { useResponsive } from "../context/Responsive";
import config from "../config";
import { Text, Flex } from "./";
import { useApp } from "../context/AppProvider";

const Box = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: 50px;

  span {
    white-space: pre;
  }

  @media (max-width: ${config.global.breakpoints.middle}px) {
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
    flex-direction: row;
    span {
      padding: 0 4px;
    }
  }
`;

const Title = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.red};
`;

export type SummaryProps = {
  players: string;
  time: string;
  age: string;
  weight: string;
  bgg_rank: string;
};

export const Summary = ({
  players,
  time,
  age,
  weight,
  bgg_rank,
}: SummaryProps) => {
  const { t } = useI18n();
  const { isResponsive } = useResponsive();
  const { theme } = useApp();
  return (
    <Flex flexDirection={isResponsive ? "column" : "row"} width="100%">
      <Title width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal" color={theme.colors.white}>
          {t("summary.title")}
        </Text>
      </Title>
      <Box width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal">
          {players}
        </Text>
        <Text type="small-body">{t("summary.players")}</Text>
      </Box>
      <Box width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal">
          {time}
        </Text>
        <Text type="small-body">{t("summary.time")}</Text>
      </Box>
      <Box width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal">
          {age}
        </Text>
        <Text type="small-body">{t("summary.age")}</Text>
      </Box>
      <Box width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal">
          {weight}
        </Text>
        <Text type="small-body">{t("summary.weight")}</Text>
      </Box>
      <Box width={isResponsive ? "100%" : "auto"}>
        <Text type="body1" fontWeight="normal">
          {bgg_rank}
        </Text>
        <Text type="small-body">{t("summary.bgg_rank")}</Text>
      </Box>
    </Flex>
  );
};
