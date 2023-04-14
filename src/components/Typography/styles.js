import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ uppercase }) => css`
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    text-transform: ${uppercase ? 'uppercase' : 'lowercase'};
  `}
`;
