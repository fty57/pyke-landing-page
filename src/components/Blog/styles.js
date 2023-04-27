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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  `}
`;

