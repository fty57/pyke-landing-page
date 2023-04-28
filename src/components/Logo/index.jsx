import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";

export const Logo = ({ text }) => {
  return (
    <Styled.Container>
      <Typography color="blueColor" weight="600" size="small" uppercase>
        {text}
      </Typography>
    </Styled.Container>
  );
};

Logo.propTypes = {
  text: P.node.isRequired,
};
