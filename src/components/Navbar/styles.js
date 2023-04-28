import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: ${theme.spacings.xlarge};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    background-color: ${theme.colors.blackColor};
  `}
`;
