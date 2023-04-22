import P from "prop-types";
import * as Styled from "./styles";

export const Divider = ({ width }) => {
  return (
    <Styled.Container>
      <Styled.Divider width={width} />
    </Styled.Container>
  );
};

Divider.propTypes = {
  width: P.string,
};
