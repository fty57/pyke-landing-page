import P from "prop-types";
import * as Styled from "./styles";
import { Logo } from "../Logo";
import { Blog } from "../Blog";
import { Typography } from "../Typography";

export const Footer = () => {
  return (
    <Styled.Container>
      <Logo text="ASLLYELO" />
      <div style={{ padding: "0px 1.5rem" }}>
        <Typography as="p" align="center" size="xxxsmall" color="whiteColor">
          Copyright 2019 League of Legends & Maksin Danik & Álisson Véras
        </Typography>
      </div>
      <Blog text="BLOG" />
    </Styled.Container>
  );
};
