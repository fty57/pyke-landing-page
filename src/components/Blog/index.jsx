import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";
import { Typography2 } from "../Typography2";

export const Blog = ({ text }) => {
  return (
    <Styled.Container>
      <Typography2
        as="h2"
        weight="500"
        size="xsmall"
        color="whiteColor"
        uppercase
      >
        {text}
      </Typography2>
      <Styled.BlueChat />
    </Styled.Container>
  );
};

Blog.propTypes = {
  text: P.node.isRequired,
};
