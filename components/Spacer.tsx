import styled from "styled-components";

type SpacerProps = {
  height?: string;
  width?: string;
};

export const Spacer = styled.div<SpacerProps>`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;
