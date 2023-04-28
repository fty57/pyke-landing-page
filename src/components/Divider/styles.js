import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 0.25rem;
  padding: 1rem 0rem;
  justify-content: center;
`;

export const Divider = styled.hr`
  ${({ width, theme }) => css`  
    border-radius: 1.5rem;
    width: ${width ? width : '35%'};
    background-color: ${theme.colors.whiteColor};
  `}
`
