import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";

export const NameCard = ({ title, children }) => {
  return (
    <Styled.Container>
      <Typography
        as="h4"
        color="blueColor"
        size="small"
        weight="500"
        align="left"
        capitalize
      >
        {title}
      </Typography>
      <Typography
        as="h4"
        color="whiteColor"
        size="xxsmall"
        weight="500"
        align="left"
        capitalize
      >
        {children}
      </Typography>
    </Styled.Container>
  );
};

NameCard.propTypes = {
  title: P.string.isRequired,
  children: P.node.isRequired,
};
