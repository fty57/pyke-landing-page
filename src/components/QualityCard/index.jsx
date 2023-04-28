import P from "prop-types";
import * as Styled from "./styles";

import { Button } from "../Button";
import { Accordion } from "../Accordion";
import { Typography } from "../Typography";
import { BackgroundContainer } from "../BackgroundContainer";

export const QualityCard = ({ title, imgUrl, description }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageCard imgUrl={imgUrl} />
        <Styled.Dot />
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <Typography
          as="h6"
          color="blueColor"
          size="xsmall"
          align="center"
          weight="500"
          uppercase
        >
          {title}
        </Typography>
        <Typography
          as="p"
          color="whiteColor"
          size="xxsmall"
          align="center"
          weight="500"
        >
          {description}
        </Typography>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

QualityCard.propTypes = {
  title: P.string.isRequired,
  imgUrl: P.string.isRequired,
  description: P.string.isRequired,
};
