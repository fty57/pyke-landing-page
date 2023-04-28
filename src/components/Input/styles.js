import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    width: 60%;
    border: 0px solid;
    border-radius: 0.625rem;
    padding: 0.75rem 1.5rem;
    box-shadow: inset 0px 0px 20px 20px rgba(40, 36, 36, 0.7);

    @media ${theme.breakpoints.medium}{
      width: 100%;
    }
  `}
`;
