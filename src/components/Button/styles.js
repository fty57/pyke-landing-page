import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme'

export const Container = styled.div`
  ${({ theme }) => css`
  `}
`;

export const ButtonMedium = styled.button`
  ${({ theme }) => css`
  border: 0px;
  padding: 0.75rem 3rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.pinkColor};
  box-shadow: inset 0px -10px 15px 10px rgba(0, 0, 0, 0.2);

  &:hover{
    background-color: ${theme.colors.pinkSubColor};
  }
  `}
`;

export const ButtonSmall = styled.button`
  ${({ theme }) => css`
  border: 0px;
  padding: 0.5rem 1.5rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.pinkColor};
  box-shadow: inset 0px -10px 15px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${theme.colors.blackColor};
  }

  &:hover .hoverable {
      color: ${theme.colors.blueColor};
    }
  `}
`;