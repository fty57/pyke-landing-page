import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;
