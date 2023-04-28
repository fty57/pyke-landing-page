import P from "prop-types";
import * as Styled from "./styles";
import { Menu } from "../Menu";

const links = [
  { children: "Home", link: "#home" },
  { children: "Accounts", link: "#accounts" },
  { children: "About", link: "#about" },
  { children: "Feedbacks", link: "#feedbacks" },
  { children: "News", link: "#news" },
];

export const Navbar = () => {
  return (
    <Styled.Container>
      <Menu links={links} />
    </Styled.Container>
  );
};
