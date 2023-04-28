import styled, { css } from 'styled-components';
import spacingCase from '../../utils/spacingCase'

export const Container = styled.div`
  ${({ theme, spacings, isBgColor }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${isBgColor ? theme.colors.darkRedColor : 'transparent'};
    ${spacingCase(theme, spacings)}

    @media ${theme.breakpoints.medium}{
      padding: ${theme.spacings.xxxsmall}
    }
  `}
`;
