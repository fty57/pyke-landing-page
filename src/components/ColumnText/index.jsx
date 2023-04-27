import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";
import { Typography2 } from "../Typography2";

export const ColumnText = ({ title, children }) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Typography2
          as="h2"
          weight="500"
          color="blueColor"
          size="medium"
          capitalize
          align="center"
        >
          {title}
        </Typography2>
      </Styled.TitleContainer>
      <Styled.DescriptionContainer>{children}</Styled.DescriptionContainer>
    </Styled.Container>
  );
};

ColumnText.propTypes = {
  title: P.string.isRequired,
  children: P.node,
};
