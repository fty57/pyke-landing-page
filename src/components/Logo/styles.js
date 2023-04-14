import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  width: 50%;
  color: #fff;
  cursor: pointer;
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.25rem;
  position: relative;
  text-decoration: none;

  &:hover{
    color: #2596be;
  }
  `}
`;
