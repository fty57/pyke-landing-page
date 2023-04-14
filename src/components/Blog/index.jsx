import P from "prop-types";
import * as Styled from "./styles";
import styled from "styled-components";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Blog = ({ text }) => {
  return (
    <Styled.Container className={work_sans.className}>
      <Styled.VerticalRow />
      <span>{text}</span>
      <Styled.BlueChat />
    </Styled.Container>
  );
};

Blog.propTypes = {
  text: P.node.isRequired,
};
