import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";

export const BackgroundContainer = ({
  width,
  height,
  imgUrl,
  children,
  bgColor,
  opacity,
  shadowEffect,
}) => {
  return (
    <Styled.Container width={width} height={height}>
      <Styled.BackgroundImage imgUrl={imgUrl} shadowEffect={shadowEffect}>
        <Styled.BackgroundText>{children}</Styled.BackgroundText>
      </Styled.BackgroundImage>
      <Styled.BackgroundOverlay opacity={opacity} bgColor={bgColor} />
    </Styled.Container>
  );
};

BackgroundContainer.propTypes = {
  width: P.string.isRequired,
  height: P.string.isRequired,
  imgUrl: P.string.isRequired,
  children: P.node,
  bgColor: P.string,
  shadowEffect: P.bool,
};
