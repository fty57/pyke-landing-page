import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  color: #fff;
  display: block;
  font-size: 0.875rem;
  padding: 1.25rem;
  font-weight: 600;
  position: relative;
  text-decoration: none;

  &:hover{
    color: #2596be;
  }

  &::after {
    width: 0;
    left: 50%;
    content: '';
    height: 0.2rem;
    bottom: 0.75rem;
    position: absolute;
    background: #2596be;
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
  `}
`;
