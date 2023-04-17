import styled from 'styled-components';

export const AccordionContainer = styled.div`
`;

export const AccordionHeader = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1.25rem;
  align-items: center;
  background-color: #201c1c;
  justify-content: space-between;
  transition: color 0.2s ease-in-out;
`;

export const AccordionContent = styled.div`
  padding: 1.25rem;
  min-height: 100px; 
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`;