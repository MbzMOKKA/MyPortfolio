//Imports
import styled from "styled-components";
import {
    borders,
    breakpoints,
    colors,
    widths,
} from "../../../../../utils/style";

//Local styles
export const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 150;
    will-change: background-color, backdrop-filter;
    &.shown {
        animation: noEffectAnimation1 600ms forwards;
    }
    &.hidden {
        animation: noEffectAnimation2 400ms forwards;
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        &.shown {
            animation: modalBgAppear 600ms forwards;
        }
        &.hidden {
            animation: modalBgDisappear 400ms forwards;
        }
    }
`;

export const StyledModal = styled.div`
    position: relative;
    background-color: ${colors.neutral.bodyBg};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: auto;
    overflow-y: scroll;
    scrollbar-color: ${colors.support.scrollbar} transparent;
    &.shown {
        animation: modalWorkOrSkillOpen 600ms forwards
            cubic-bezier(0.1, 0.98, 0.41, 0.98);
    }
    &.hidden {
        animation: modalWorkOrSkillClose 400ms forwards;
    }
    header {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            position: absolute;
            right: 5px;
            top: 5px;
        }
    }
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 16px 0px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: unset;
        width: 90%;
        height: 90%;
        border: ${borders.common.modal};
        border-radius: ${borders.radius.modal};
        padding: 28px;
        header {
            flex-direction: row;
            align-items: unset;
            justify-content: center;
            margin-bottom: 16px;
            padding: 0;
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        width: 70%;
        header {
            margin-bottom: 36px;
        }
    }
`;
