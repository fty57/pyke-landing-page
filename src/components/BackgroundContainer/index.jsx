import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";

export const BackgroundContainer = ({ imgUrl, children }) => {
  return (
    <Styled.Container>
      <Styled.BackgroundImage imgUrl={imgUrl}>
        <Styled.BackgroundText>{children}</Styled.BackgroundText>
      </Styled.BackgroundImage>
      <Styled.BackgroundOverlay />
    </Styled.Container>
  );
};

BackgroundContainer.propTypes = {
  imgUrl: P.string.isRequired,
};
