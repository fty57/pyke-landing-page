import P from "prop-types";
import * as Styled from "./styles";

import { Button } from "../Button";
import { Accordion } from "../Accordion";
import { Typography } from "../Typography";
import { Typography2 } from "../Typography2";
import { BackgroundContainer } from "../BackgroundContainer";

export const QualityCard = ({ title, imgUrl, description }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageCard imgUrl={imgUrl} />
        <Styled.Dot />
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <Typography2
          as="h6"
          color="blueColor"
          size="xsmall"
          align="center"
          weight="500"
          uppercase
        >
          {title}
        </Typography2>
        <Typography2
          as="p"
          color="whiteColor"
          size="xxsmall"
          align="center"
          weight="500"
        >
          {description}
        </Typography2>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

QualityCard.propTypes = {
  title: P.string.isRequired,
  imgUrl: P.string.isRequired,
  description: P.string.isRequired,
};
