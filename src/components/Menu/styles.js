import styled, { css } from 'styled-components';
import { Container as SectionMenuContainer } from '../SectionMenuContainer/styles';

const menuVisible = () => css`
  opacity: 1;
  visibility: visible;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    width: 100%;
    position: fixed;
    transition: all 300ms ease-in-out;
    background: ${theme.colors.blackColor};

    > ${SectionMenuContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.breakpoints.medium} {
      opacity: 0;
      height: 100vh;
      visibility: hidden;

      ${visible && menuVisible(theme)}
      > ${SectionMenuContainer} {
        display: grid;
        height: 100vh;
        overflow-y: auto;
        align-items: center;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.breakpoints.medium} {
      display: block;
      padding: 2rem 0;
      text-align: center;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    border: none;
    display: none;
    position: fixed;
    top: ${theme.spacings.tiny};
    right: ${theme.spacings.tiny};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    color: ${theme.colors.whiteColor};
    background:  ${theme.colors.blackColor};
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.breakpoints.medium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    }
  `}
`;
