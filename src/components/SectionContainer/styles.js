import styled, { css } from 'styled-components';
import spacingCase from '../../utils/spacingCase'

export const Container = styled.div`
  ${({ theme, spacings }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${spacingCase(theme, spacings)}
  `}
`;
