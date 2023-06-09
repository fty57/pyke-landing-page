import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: ${theme.spacings.xxsmall};
  `}
`;
