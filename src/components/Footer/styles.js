import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};
    min-height: ${theme.spacings.large};
    background-color:${theme.colors.blackColor};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

    @media ${theme.breakpoints.medium}{
      padding: ${theme.spacings.xxsmall};
    }
  `}
`;
