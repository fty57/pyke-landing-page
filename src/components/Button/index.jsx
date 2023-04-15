import P from "prop-types";
import * as Styled from "./styles";

export const Button = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Button>{children}</Styled.Button>
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
};
