//Imports
import styled from "styled-components";
import { borders, colors, shadows } from "../../../../utils/style";

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
    &.shown {
        animation: modalBgAppear 600ms forwards;
    }
    &.hidden {
        animation: modalBgDisappear 400ms forwards;
    }
`;

export const StyledModal = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.neutral.bodyBgColor};
    border: ${borders.common.modal};
    border-bottom: none;
    border-top-left-radius: ${borders.radius.modal};
    border-top-right-radius: ${borders.radius.modal};
    box-shadow: ${shadows.modal};
    overflow: hidden;
    &.shown {
        animation: modalWorkOrSkillOpen 600ms forwards
            cubic-bezier(0.1, 0.98, 0.41, 0.98);
    }
    &.hidden {
        animation: modalWorkOrSkillClose 400ms forwards;
    }
    header {
        //4:3 format
        position: relative;
        width: 100%;
        height: 75vw;
        display: flex;
        & > img {
            object-fit: cover;
            width: 100%;
            height: auto;
        }
        h1 {
            position: absolute;
            left: 5px;
            bottom: 5px;
            text-shadow: 0px 1px 4px black;
        }
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
        padding: 8px 0px;
    }
`;

export const StyledDescription = styled.p`
    width: 100%;
    background-color: ${colors.neutral.semiOpaqueBlack};
    padding: 8px;
    padding-top: 24px;
`;
