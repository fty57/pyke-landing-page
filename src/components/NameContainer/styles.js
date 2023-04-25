import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 5;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `}
`;
