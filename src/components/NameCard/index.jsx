import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";

export const NameCard = ({ title, children }) => {
  return (
    <Styled.Container>
      <Typography type="text">{title}</Typography>
      <Typography type="button">{children}</Typography>
    </Styled.Container>
  );
};

NameCard.propTypes = {
  title: P.string.isRequired,
  description: P.node.isRequired,
};
