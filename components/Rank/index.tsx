import React from "react";
import { Row, Column, Text, Spacer } from "..";
import { useI18n } from "../../context/I18nProvider";
import { useResponsive } from "../../context/Responsive";

import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "./Dices";

type RankProps = {
  rank: number;
};

export const Rank = ({ rank }: RankProps) => {
  const dices = (rank * 6) / 10;
  const { t } = useI18n();
  const { isResponsive } = useResponsive();
  return (
    <Column width="100%">
      <Text type="h3">{t(`rank.value`)}</Text>
      {!isResponsive && (
        <>
          <Spacer height="24px" />
          <Row justifyContent="center" alignItems="center" width="100%">
            <Dice1 visible={dices >= 1} />
            <Dice2 visible={dices >= 2} />
            <Dice3 visible={dices >= 3} />
            <Dice4 visible={dices >= 4} />
            <Dice5 visible={dices >= 5} />
            <Dice6 visible={dices >= 6} />
          </Row>
        </>
      )}
      <Spacer height="24px" />
      <Column justifyContent="center" alignItems="center" width="100%">
        <Text type="h1" withMarkdown={false}>
          {rank.toString()}/10
        </Text>
        <Text type="h1">{t(`rank.${Math.floor(rank)}`)}</Text>
      </Column>
    </Column>
  );
};
