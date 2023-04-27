import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media ${theme.breakpoints.medium}{
      display: block;
      text-align: center;
    }
  `}
`;
