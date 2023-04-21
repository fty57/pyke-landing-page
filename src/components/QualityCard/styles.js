import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 19rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  margin-bottom: 2rem;
  position: relative;
`;


export const Dot = styled.div`
  top: 0.625rem;
  right: 0.625rem;
  width: 1.625rem;
  height: 1.625rem;
  position: absolute;
  border-radius: 0.8125rem;
  background-color: #20dce4;
`;

export const ImageCard = styled.div`
  ${({ theme }) => css`
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 75px;
  background-size: cover;
  background-position: right center;
  background-image: url(${props => props.imgUrl});
  `}
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 11.875rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(40, 36, 36, 0.85);
`;



