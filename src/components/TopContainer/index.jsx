import P from "prop-types";
import * as Styled from "./styles";
import { Logo } from "../Logo";
import { Blog } from "../Blog";
import { NavLinks } from "../NavLinks";

const links = [
  { children: "Home", link: "#target 1" },
  { children: "Accounts", link: "#target 2" },
  { children: "About", link: "#target 3" },
  { children: "Feedbacks", link: "#target 3" },
  { children: "News", link: "#target 3" },
];

export const TopContainer = () => {
  return (
    <Styled.Container>
      <Logo text="ASLLYELO" />
      <NavLinks links={links} />
      <Blog text="BLOG" />
    </Styled.Container>
  );
};
