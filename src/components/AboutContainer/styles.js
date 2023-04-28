import styled, { css } from 'styled-components';
import { Typography } from '../Typography';

export const Container = styled.div`
  ${({ theme, isColumn }) => css`
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: ${isColumn ? 'column' : 'row'};
    align-items: center;
    justify-content: center;

    @media ${theme.breakpoints.medium} {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

  `}
`;
