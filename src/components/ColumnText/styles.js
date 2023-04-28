import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xsmall};
  `};
`;