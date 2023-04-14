import styled, { css } from 'styled-components';
import { Chat } from "@styled-icons/bootstrap/Chat";
import { theme } from '../../styles/theme'

export const BlueChat = styled(Chat)`
  width: 1.5rem;
  height: 1.5rem;
  color: #2596be;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    height: 100%;
    display: flex;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1.125rem;
  `}
`;

export const VerticalRow = styled.div`
  ${({ theme }) => css`
    top: 50%;
    left: 30%;
    height: 50%;
    position: absolute;
    border-left: 1px solid #fff;
    transform: translate(-50%, -50%);

    @media ${theme.breakpoints.medium}{
      left: 20%;
    }

    @media ${theme.breakpoints.small}{
      left: 10%;
    }
  `}
`;
