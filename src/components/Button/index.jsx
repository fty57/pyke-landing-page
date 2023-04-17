import P from "prop-types";
import * as Styled from "./styles";

export const Button = ({ children, size }) => {
  return (
    <Styled.Container>
      {size === "small" && <Styled.ButtonSmall>{children}</Styled.ButtonSmall>}
      {size === "medium" && (
        <Styled.ButtonMedium>{children}</Styled.ButtonMedium>
      )}
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(["small", "medium"]),
};
