import styled, { css } from 'styled-components';
import { Container as SectionMenuContainer } from '../SectionMenuContainer/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    width: 100%;
    position: fixed;
    background: ${theme.colors.blackColor};
    transition: all 300ms ease-in-out;

    > ${SectionMenuContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.breakpoints.medium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible(theme)}
      > ${SectionMenuContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
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
    top: 0.5rem;
    right: 0.5rem;
    width: 3rem;
    height: 3rem;
    border: none;
    display: none;
    position: fixed;
    color: ${theme.colors.whiteColor};
    background:  ${theme.colors.blackColor};
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.breakpoints.medium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
