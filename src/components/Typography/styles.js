import styled, { css } from 'styled-components';

export const Container = styled.span``;

export const MainType = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1.875rem;
  text-transform: uppercase;
`

export const TitleType = styled.h1`
  color: #fff;
  font-size: 3.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);

  &::first-letter{
    font-size: 4.5rem;
  }
`

export const ButtonType = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`

export const TextTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  text-transform: capitalize;
`
