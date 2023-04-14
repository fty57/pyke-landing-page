import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    width: 100%;
    display: flex;
    min-height: 3.75rem;
    align-items: center;
    background-color: #242424;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  `}
`;
