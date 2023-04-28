import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  display: block;
  font-weight: 600;
  position: relative;
  font-size: 0.875rem;
  text-decoration: none;
  padding: ${theme.spacings.xsmall};
  color: ${theme.colors.whiteColor};

  &:hover{
    color: ${theme.colors.blueColor};
  }

  &::after {
    width: 0;
    left: 50%;
    content: '';
    height: 0.2rem;
    bottom: 0.75rem;
    position: absolute;
    transition: all 300ms ease-in-out;
    background: ${theme.colors.blueColor};
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
  `}
`;
