import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container
      href={link}
      target={target}
      className={work_sans.className}
    >
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.node.isRequired,
  newTab: P.bool,
};
