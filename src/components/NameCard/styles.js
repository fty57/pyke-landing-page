import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.tiny};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.spacings.small};
    box-shadow: inset 0px 0px 50px 50px rgba(40, 36, 36, 0.7);
  `};
`;