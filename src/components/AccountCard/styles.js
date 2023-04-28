import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  ${({ theme, price, nationality, description }) => css`
    width: 25rem;
    background-color: ${theme.colors.blackColor};
  `}
`

export const TopTip = styled.div`
${({ theme }) => css`
  width: 30%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  padding: ${theme.spacings.tiny};
  background-color: ${theme.colors.blueColor};
`};

`

export const PriceContainer = styled.div`
${({ theme }) => css`
  width: 100%;
  display: flex;
  padding: ${theme.spacings.xxsmall};
  justify-content: center;
`};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

