import P from "prop-types";
import * as Styled from "./styles";
import { Logo } from "../Logo";
import { Blog } from "../Blog";

export const Footer = () => {
  return (
    <Styled.Container>
      <Logo text="ASLLYELO" />
      <h1>Copyright 2019 League of Legends & Francisco Álisson</h1>
      <Blog text="BLOG" />
    </Styled.Container>
  );
};
