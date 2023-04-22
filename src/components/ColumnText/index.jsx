import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";

export const ColumnText = ({ title, children }) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Typography type="text">{title}</Typography>
      </Styled.TitleContainer>
      <Styled.DescriptionContainer>{children}</Styled.DescriptionContainer>
    </Styled.Container>
  );
};

ColumnText.propTypes = {
  title: P.string.isRequired,
  children: P.node,
};
