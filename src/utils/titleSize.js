import styled, { css } from 'styled-components';

const titleSize = (theme, size) => {
  switch (size) {
    case 'xxxsmall':
      return css`font-size: ${theme.fonts.xxxsmall};`
      break;

    case "xxsmall":
      return css`font-size: ${theme.fonts.xxsmall};`
      break;

    case "xsmall":
      return css`font-size: ${theme.fonts.xsmall};`
      break;

    case "small":
      return css`font-size: ${theme.fonts.small};`
      break;

    case "medium":
      return css`font-size: ${theme.fonts.medium};`
      break;

    case "large":
      return css`font-size: ${theme.fonts.large};`
      break;

    case "xlarge":
      return css`font-size: ${theme.fonts.xlarge};`
      break;

    case "xxlarge":
      return css`font-size: ${theme.fonts.xxlarge};`
      break;

    case "huge":
      return css`font-size: ${theme.fonts.huge};`
      break;

    case "xhuge":
      return css`font-size: ${theme.fonts.xhuge};`
      break;


    default:
      return css`font-size: ${theme.fonts.medium};`
      break;
  }
};

export default titleSize;
