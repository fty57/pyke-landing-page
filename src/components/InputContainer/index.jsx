import P from "prop-types";
import * as Styled from "./styles";

export const InputContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

InputContainer.propTypes = {
  children: P.node.isRequired,
};
