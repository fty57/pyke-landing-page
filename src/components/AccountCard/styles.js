import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  ${({ price, nationality, description }) => css`
    width: 400px;
    height: 270px;
    background-color: blue;
  `}
`

export const TopTip = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  position: relative;
  justify-content: center;
  background-color: #20dce4;
  border-radius: 0px 5px 5px 0px;
`

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

