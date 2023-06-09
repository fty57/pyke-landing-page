import P from "prop-types";
import * as Styled from "./styles";

export const SectionMenuContainer = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

SectionMenuContainer.propTypes = {
  children: P.node.isRequired,
};
