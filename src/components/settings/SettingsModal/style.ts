//Imports
import styled from "styled-components";
import { borders, colors, paddings, shadows } from "../../../utils/style";

//Types
type StyledLanguageOptionProps = {
    selected: boolean;
};

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
    z-index: 100;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.neutral.settingsBg};
    border: ${borders.common.modal};
    border-top: none;
    border-bottom-left-radius: ${borders.radius.modal};
    border-bottom-right-radius: ${borders.radius.modal};
    box-shadow: ${shadows.modal};
    overflow: hidden;
    &.shown {
        animation: modalSettingsOpen 600ms forwards
            cubic-bezier(0.1, 0.98, 0.41, 0.98);
    }
    &.hidden {
        animation: modalSettingsClose 400ms forwards;
    }
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: ${paddings.mobile.modalHeader};
        background-color: rgba(255, 255, 255, 0.125);
    }
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: ${paddings.mobile.modalMain};
    }
`;

export const StyledLanguageOption = styled.button<StyledLanguageOptionProps>`
    background-color: ${({ selected }) =>
        selected ? colors.support.selected : colors.support.notSelected};
    //background-color: ${colors.support.notSelected};
    border: ${({ selected }) =>
        selected
            ? borders.common.optionSelected
            : borders.common.optionNotSelected};
`;
