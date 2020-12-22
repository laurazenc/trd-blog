import React from "react";
import { Row, Icon, Spacer, Text } from ".";
import { useI18n } from "../context/I18nProvider";
import { useResponsive } from "../context/Responsive";
import { dayjs } from "../utils/dates";
import { readingTime } from "../utils/readingTime";

type PostResumeProps = {
  published_at: Date;
  text: any[];
};

export const PostResume = ({ published_at, text }: PostResumeProps) => {
  const time = readingTime(text.join(" "));
  const { t } = useI18n();
  const { isResponsive } = useResponsive();
  return (
    <Row margin={isResponsive ? "16px 0 0" : "0"}>
      <Spacer width={isResponsive ? "0" : "4px"} />
      <Text withMarkdown={false} type="small-body" textTransform="uppercase">
        {dayjs(published_at).format("DD MMM YYYY")}
      </Text>
      <Spacer width="8px" />
      <Spacer width="4px" />
      <Text withMarkdown={false} type="small-body" textTransform="uppercase">
        {time} {t(`post_resume.reading_time.minute${time > 1 ? "s" : ""}`)}
      </Text>
    </Row>
  );
};
