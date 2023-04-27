import styled, { css } from 'styled-components';

const colorCase = (theme, color) => {
  switch (color) {
    case "blueColor":
      return css`color: ${theme.colors.blueColor};`
      break;

    case "pinkColor":
      return css`color: ${theme.colors.pinkColor};`
      break;

    case "pinkSubColor":
      return css`color: ${theme.colors.pinkSubColor};`
      break;

    case "whiteColor":
      return css`color: ${theme.colors.whiteColor};`
      break;

    default:
      return css`color: ${theme.colors.blackColor};`
      break;
  }
}

export default colorCase;