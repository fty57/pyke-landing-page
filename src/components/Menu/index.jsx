import P from "prop-types";
import { useState } from "react";
import * as Styled from "./styles";

import { Logo } from "../Logo";
import { Blog } from "../Blog";
import { NavLinks } from "../NavLinks";
import { SectionMenuContainer } from "../SectionMenuContainer";

import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

export const Menu = ({ links = [] }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        arial-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon arial-label="Close menu" />
        ) : (
          <MenuIcon arial-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionMenuContainer>
          <Styled.MenuContainer>
            <Logo text="ASLLYELO" />
            <NavLinks links={links} />
            <Blog text="Blog" />
          </Styled.MenuContainer>
        </SectionMenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
};
