import P from "prop-types";
import * as Styled from "./styles";

export const MainContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

MainContainer.propTypes = {
  children: P.node.isRequired,
};
