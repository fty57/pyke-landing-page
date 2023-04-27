import styled, { css } from 'styled-components';
import colorCase from '../../utils/colorCase'
import titleSize from '../../utils/titleSize'

// const titleSize = {
//   small: (theme) => css`
//     font-size: ${theme.fonts.medium};
//   `,
//   medium: (theme) => css`
//     font-size: ${theme.fonts.large};
//   `,
//   big: (theme) => css`
//     font-size: ${theme.fonts.xlarge};
//   `,
//   huge: (theme) => css`
//     font-size: ${theme.fonts.xhuge};
//     ${mediaFont(theme)};
//   `,
// };



const mediaFont = (theme) => css`
  @media ${theme.breakpoints.medium} {
    font-size: ${theme.fonts.xlarge};
  }
`;

const titleCase = (uppercase, capitalize) => css`
  text-transform: ${uppercase ? 'uppercase' : capitalize ? 'capitalize' : 'none'
  };
`;

export const Title = styled.h1`
  ${({ theme, color, size, uppercase, capitalize, weight, align, textShadow, letterSpacing }) => css`
    ${colorCase(theme, color)};
    ${titleSize(theme, size)};
    ${titleCase(uppercase, capitalize)};
    font-weight: ${weight};
    text-align: ${align};
    letter-spacing: ${letterSpacing};
    text-shadow: ${textShadow ? textShadow : 'none'};
  `}
`;

