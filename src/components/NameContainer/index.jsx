import P from "prop-types";
import * as Styled from "./styles";

export const NameContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

NameContainer.propTypes = {
  children: P.node.isRequired,
};
