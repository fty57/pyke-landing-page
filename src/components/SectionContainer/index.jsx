import P from "prop-types";
import * as Styled from "./styles";

export const SectionContainer = ({ children, spacings = "xxsmall" }) => {
  return <Styled.Container spacings={spacings}>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
  spacings: P.oneOf([
    "xxxsmall",
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "huge",
    "xhuge",
  ]),
};
