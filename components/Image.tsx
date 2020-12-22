import React, { useState, useRef } from "react";
import styled from "styled-components";
import { light as colors } from "../theme/colors";
import { getStrapiMedia } from "../utils/media";
import { Flex } from "./Flex";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img<{
  visible: boolean;
  wrapperHeight: number;
  imgHeight: number;
  ref: any;
}>`
  display: block;
  width: 100%;
  height: auto;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  object-fit: cover;
  object-position: center;
  margin-top: -${(props) => (props.wrapperHeight ? `${(props.imgHeight - props.wrapperHeight) / 2}px` : "0px")};
`;

type ImageProps = {
  width?: number;
  height?: number;
  image: any;
  center?: boolean;
};

const ImageWrapper = styled<any>(Flex)`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => props.height}px;
  overflow: hidden;
`;

const FallbackImage = styled(Flex)`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${colors.black};

  div {
    opacity: 0.08;
    width: 42px;
    height: 50px;
    position: absolute;
    left: calc(100% / 2 - 21px);
    top: calc(100% / 2 - 25px);
  }
`;

export const Image = ({ image, width, height }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const src = image.path || getStrapiMedia(image.url);
  const imgRef = useRef<any>();

  return (
    <ImageWrapper {...{ width, height }}>
      <Container>
        {!loaded && (
          <FallbackImage>
            <img src="/media/logo-two-lines.svg" alt="logo" />
          </FallbackImage>
        )}
        <StyledImage
          ref={imgRef}
          draggable={false}
          alt={image.alternativeText || image.name}
          visible={loaded}
          onLoad={() => {
            setLoaded(true);
          }}
          {...{
            src,
            wrapperHeight: height || 0,
            imgHeight: imgRef.current ? imgRef!.current!.offsetHeight : 0,
          }}
        />
      </Container>
    </ImageWrapper>
  );
};
