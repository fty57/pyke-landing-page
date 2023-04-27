import P from "prop-types";
import * as Styled from "./styles";
import { Typography2 } from "../Typography2";

export const Logo = ({ text }) => {
  return (
    <Styled.Container>
      <Typography2 color="blueColor" weight="600" size="small" uppercase>
        {text}
      </Typography2>
    </Styled.Container>
  );
};

Logo.propTypes = {
  text: P.node.isRequired,
};
