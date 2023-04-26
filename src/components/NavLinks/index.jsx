import P from "prop-types";
import * as Styled from "./styles";
import { MenuLink } from "../MenuLink";
import { MenuButton } from "../MenuButton";

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
      <MenuButton />
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
    })
  ),
};
