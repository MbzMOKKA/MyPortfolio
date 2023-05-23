//Imports
import styled from 'styled-components';
import colors from '../../../../utils/style/colors';

//Types
type StyledLanguageOptionProps = {
    selected: boolean;
};

//Common constants
const modalBottomRadius = '14px';

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
    &.shown {
        animation: modalBgAppear 500ms forwards;
    }
    &.hidden {
        animation: modalBgDisappear 250ms forwards;
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
    border: 1px rgba(255, 255, 255, 0.3) solid;
    border-top: none;
    border-bottom-left-radius: ${modalBottomRadius};
    border-bottom-right-radius: ${modalBottomRadius};
    box-shadow: 0px 4px 8px black;
    overflow: hidden;
    &.shown {
        animation: modalSettingsOpen 500ms forwards cubic-bezier(0.1, 0.98, 0.41, 0.98);
    }
    &.hidden {
        animation: modalSettingsClose 250ms forwards;
    }
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        padding-left: 16px;
        background-color: rgba(255, 255, 255, 0.125);
    }
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 20px;
    }
`;

export const StyledSeparator = styled.div`
    width: 100%;
    height: 8px;
    border-top: 2px rgba(255, 255, 255, 0.5) solid;
    border-bottom: 1px rgba(255, 255, 255, 0.25) solid;
`;

export const StyledLanguageOption = styled.button<StyledLanguageOptionProps>`
    background-color: ${({ selected }) => (selected ? colors.support.selected : colors.support.notSelected)};
`;
