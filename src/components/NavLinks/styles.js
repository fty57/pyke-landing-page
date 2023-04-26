import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media ${theme.breakpoints.medium}{
      display: block;
      text-align: center;

      > *:nth-child(n + 2) {
        display: none;
      }
    }
  `}
`;
