import styled, { css } from 'styled-components';
import { Chat } from "@styled-icons/bootstrap/Chat";
import { theme } from '../../styles/theme'

export const BlueChat = styled(Chat)`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    color: ${theme.colors.blueColor};
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};
  `}
`;

