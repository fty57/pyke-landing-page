import P from "prop-types";
import * as Styled from "./styles";

export const SectionContainer = ({
  children,
  spacings = "xxsmall",
  id,
  isBgColor,
}) => {
  return (
    <Styled.Container id={id} spacings={spacings} isBgColor={isBgColor}>
      {children}
    </Styled.Container>
  );
};

SectionContainer.propTypes = {
  id: P.string,
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
  isBgColor: P.bool,
};
