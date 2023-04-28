import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `};
`;

export const ImageContainer = styled.div`
  width: 9rem;
  height: 9rem;
  position: relative;
  margin-bottom: 2rem;
`;


export const Dot = styled.div`
  ${({ theme }) => css`  
    top: 0.625rem;
    right: 0.625rem;
    width: 1.625rem;
    height: 1.625rem;
    position: absolute;
    border-radius: 0.875rem;
    background-color: ${theme.colors.blueColor};
  `};
`;

export const ImageCard = styled.div`
  ${({ imgUrl }) => css`
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 75px;
  background-size: cover;
  background-image: url(${imgUrl});
  background-position: right center;
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    min-height: 11.5rem;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    background-color: rgba(40, 36, 36, 0.85);
  `};
`;



