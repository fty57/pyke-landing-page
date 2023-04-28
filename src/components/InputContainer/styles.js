import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: ${theme.spacings.xxsmall};

    @media ${theme.breakpoints.medium}{
      width: 90vw
    }
  `}
`;
