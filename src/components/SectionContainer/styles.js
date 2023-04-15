import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1.25rem;
  `}
`;
