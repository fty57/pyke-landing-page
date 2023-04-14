import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}
`;
