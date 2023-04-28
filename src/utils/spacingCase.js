import styled, { css } from 'styled-components';

const spacingCase = (theme, spacings) => {
  switch (spacings) {
    case 'tiny':
      return css`padding: ${theme.spacings.tiny};`
      break;

    case 'xxxsmall':
      return css`padding: ${theme.spacings.xxxsmall};`
      break;

    case "xxsmall":
      return css`padding: ${theme.spacings.xxsmall};`
      break;

    case "xsmall":
      return css`padding: ${theme.spacings.xsmall};`
      break;

    case "small":
      return css`padding: ${theme.spacings.small};`
      break;

    case "medium":
      return css`padding: ${theme.spacings.medium};`
      break;

    case "large":
      return css`padding: ${theme.spacings.large};`
      break;

    case "xlarge":
      return css`padding: ${theme.spacings.xlarge};`
      break;

    case "xxlarge":
      return css`padding: ${theme.spacings.xxlarge};`
      break;

    case "huge":
      return css`padding: ${theme.spacings.huge};`
      break;

    case "xhuge":
      return css`padding: ${theme.spacings.xhuge};`
      break;


    default:
      return css`padding: ${theme.fonts.medium};`
      break;
  }
};

export default spacingCase;
