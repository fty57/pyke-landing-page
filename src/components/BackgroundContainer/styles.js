import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme'

export const Container = styled.div`
${({ theme }) => css`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
`}
`

export const BackgroundImage = styled.div`
  ${({ theme }) => css`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imgUrl});
  box-shadow: inset 0px 20px 20px 20px rgba(0,0,0,0.5);
  `}
`;

export const BackgroundText = styled.div`
 ${({ theme }) => css`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
 `}
`

export const BackgroundOverlay = styled.div`
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.25;
  background-color: ${props => props.bgColor};
`;