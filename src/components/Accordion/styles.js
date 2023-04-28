import styled, { css } from 'styled-components';

export const AccordionContainer = styled.div`
`;

export const AccordionHeader = styled.div`
  ${({ theme, isColumn }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};
    transition: color 0.2s ease-in-out;
    background-color: ${theme.colors.darkRedColor};
  `};
`;

export const AccordionContent = styled.div`
  ${({ theme }) => css`  
    overflow: hidden;
    min-height: 100px; 
    padding: ${theme.spacings.small};
    transition: max-height 0.2s ease-in-out;
    max-height: ${props => (props.isOpen ? '500px' : '0')};
  `};
`;