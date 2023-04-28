import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";

export const BackgroundContainer = ({
  id,
  width,
  height,
  imgUrl,
  children,
  bgColor,
  opacity,
  shadowEffect,
}) => {
  return (
    <Styled.Container id={id} width={width} height={height}>
      <Styled.BackgroundImage imgUrl={imgUrl} shadowEffect={shadowEffect}>
        <Styled.BackgroundText>{children}</Styled.BackgroundText>
      </Styled.BackgroundImage>
      <Styled.BackgroundOverlay opacity={opacity} bgColor={bgColor} />
    </Styled.Container>
  );
};

BackgroundContainer.propTypes = {
  id: P.string,
  width: P.string.isRequired,
  height: P.string.isRequired,
  imgUrl: P.string.isRequired,
  children: P.node,
  bgColor: P.string,
  shadowEffect: P.bool,
};
