import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme'

export const Container = styled.div`
  ${({ theme }) => css`
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
  border: 0px;
  padding: 0.75rem 50px;
  border-radius: 0.625rem;
  background-color: #b444b3;
  box-shadow: inset 0px -10px 15px 10px rgba(0, 0, 0, 0.2);

  &:hover{
    background-color: #d96cd1;
  }
  `}
`;