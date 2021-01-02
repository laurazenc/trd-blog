import styled from "styled-components";
import * as CSS from "csstype";

interface IFlex {
  flexDirection?: CSS.Property.FlexDirection;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  flexWrap?: CSS.Property.FlexWrap;
  flexGrow?: CSS.Property.FlexGrow;
  width?: CSS.Property.Width;
  maxWidth?: CSS.Property.MaxWidth;
  height?: CSS.Property.Height;
  padding?: CSS.Property.Padding;
  margin?: CSS.Property.Margin;
  backgroundColor?: CSS.Property.BackgroundColor;
  borderRadius?: CSS.Property.BorderRadius;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap || " no-wrap"};
  flex-grow: ${(props) => props.flexGrow || 0};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  border-radius: ${(props) => props.borderRadius || 0};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`};
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > div {
    &:nth-of-type(odd) {
      margin-right: 27px;
    }
  }
`;
