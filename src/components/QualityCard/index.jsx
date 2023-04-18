import P from "prop-types";
import * as Styled from "./styles";

import { Button } from "../Button";
import { Accordion } from "../Accordion";
import { Typography } from "../Typography";
import { BackgroundContainer } from "../BackgroundContainer";

export const QualityCard = ({ title, imgUrl, description }) => {
  return (
    <Styled.Container>
      <h1>{title}</h1>
      <h2>{imgUrl}</h2>
      <h3>{description}</h3>
    </Styled.Container>
  );
};

QualityCard.propTypes = {
  title: P.string.isRequired,
  imgUrl: P.string.isRequired,
  description: P.string.isRequired,
};
