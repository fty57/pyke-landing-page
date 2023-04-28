import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";
import { Typography } from "../Typography";

export const Blog = ({ text }) => {
  return (
    <Styled.Container>
      <Typography
        as="h2"
        weight="500"
        size="xsmall"
        color="whiteColor"
        uppercase
      >
        {text}
      </Typography>
      <Styled.BlueChat />
    </Styled.Container>
  );
};

Blog.propTypes = {
  text: P.node.isRequired,
};
