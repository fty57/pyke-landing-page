import P from "prop-types";
import * as Styled from "./styles";

export const QualityContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

QualityContainer.propTypes = {
  children: P.node.isRequired,
};
