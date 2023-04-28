import P from "prop-types";
import * as Styled from "./styles";

export const AboutContainer = ({ children, isColumn = false }) => {
  return <Styled.Container isColumn={isColumn}>{children}</Styled.Container>;
};

AboutContainer.propTypes = {
  children: P.node.isRequired,
  isColumn: P.bool,
};
