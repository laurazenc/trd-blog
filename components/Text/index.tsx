import React from "react";
import styled, { css } from "styled-components";
import * as CSS from "csstype";
import ReactMarkdown from "react-markdown";

const fontFamily = "Inter";

interface IText {
  textAlign?: CSS.Property.TextAlign;
  textDecoration?: CSS.Property.TextDecoration;
  textTransform?: CSS.Property.TextTransform;
  fontWeight?: CSS.Property.FontWeight;
  color?: CSS.Property.Color;
  withMarkdown?: boolean;
}

const TextBase = styled.span<IText>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${fontFamily};
  margin: 0;
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration};`};
  ${(props) =>
    props.textTransform && `text-transform: ${props.textTransform};`};
  ${(props) => props.color && `color: ${props.color};`};

  p {
    ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`};
  }
  strong {
    color: ${({ theme }) => theme.colors.red};
  }

  &.is-h1,
  &.is-h1 p {
    ${css({
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "0.005em",
    })}
  }
  &.is-h3,
  &.is-h3 p {
    ${css({
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0.005em",
    })}
  }
  &.is-h4,
  &.is-h4 p {
    ${css({
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: "0.005em",
    })}
  }
  &.is-body1,
  &.is-body1 p {
    ${css({
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 300,
      fontStyle: "normal",
      letterSpacing: "0.002em",
    })}
  }
  &.is-body2,
  &.is-body2 p {
    ${css({
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0.002em",
      marginBottom: "0px",
      marginTop: "0px",
    })}
  }
  &.is-small-body,
  &.is-small-body p {
    ${css({
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      letterSpacing: "0.02em",
    })}
  }
  &.is-link,
  &.is-link p {
    ${css({
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 600,
      fontStyle: "normal",
      letterSpacing: "0.01em",
    })}
  }
`;

interface BaseText extends IText {
  type: string;
  withMarkdown?: boolean;
  children?: React.ReactNode | string | undefined;
}

export const tags = {
  h1: "h1",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body2: "span",
  "small-body": "span",
  link: "span",
  body1: "span",
};

export const Text = ({
  type,
  textAlign = "left",
  fontWeight,
  textDecoration,
  textTransform,
  color,
  withMarkdown = true,
  ...rest
}: BaseText) => {
  const className = `is-${type}`;

  const as = tags[type];

  return (
    <TextBase
      {...{
        as,
        className,
        textAlign,
        fontWeight,
        textDecoration,
        textTransform,
        color,
      }}
    >
      {withMarkdown ? (
        <ReactMarkdown children={rest.children as string} />
      ) : (
        rest.children
      )}
    </TextBase>
  );
};
