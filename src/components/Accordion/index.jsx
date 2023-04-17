import P from "prop-types";
import * as Styled from "./styles";
import React, { useState } from "react";
import { Typography } from "../Typography";

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.AccordionContainer>
      <Styled.AccordionHeader onClick={toggleAccordion}>
        <Typography type="card" active={isOpen}>
          {title}
        </Typography>
        {isOpen ? "-" : "+"}
      </Styled.AccordionHeader>
      {isOpen && <Styled.AccordionContent>{children}</Styled.AccordionContent>}
    </Styled.AccordionContainer>
  );
};

Accordion.propTypes = {
  title: P.string.isRequired,
  children: P.node,
};
