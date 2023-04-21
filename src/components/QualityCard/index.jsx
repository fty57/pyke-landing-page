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
        <div style={{ padding: "20px 20px 0px 20px" }}>
          <Typography type="quality-card">{title}</Typography>
        </div>
        <div style={{ padding: "20px" }}>
          <Typography type="card">{description}</Typography>
        </div>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

QualityCard.propTypes = {
  title: P.string.isRequired,
  imgUrl: P.string.isRequired,
  description: P.string.isRequired,
};
