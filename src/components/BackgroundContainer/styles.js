import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme'

export const Container = styled.div`
${({ theme, width, height }) => css`
  z-index: 1;
  width: ${width};
  height: ${height};
  position: relative;
`}
`

export const BackgroundImage = styled.div`
  ${({ theme, shadowEffect, imgUrl }) => css`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${imgUrl});
  box-shadow: ${shadowEffect ? "inset 0px 25px 100px 100px rgba(0,0,0, 1)" : "inset 0px 20px 20px 20px rgba(0,0,0,0.5)"};
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
  ${({ theme, opacity, bgColor }) => css`  
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${opacity};
    background-color: ${bgColor};
  `}
`;