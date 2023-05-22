//Imports
import styled from 'styled-components';
import colors from '../../../../utils/style/colors';

//Local styles
export const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 36px 18px;
`;

export const StyledModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: linear-gradient(to bottom, ${colors.neutral.modalBgTop}, ${colors.neutral.modalBgBottom});
    border: 1px rgba(255, 255, 255, 0.3) solid;
    border-top-right-radius: 24px;
    overflow: hidden;
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        padding-left: 20px;
        background-color: rgba(255, 255, 255, 0.1);
    }
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 30px 15px;
    }
`;

export const StyledSeparator = styled.div`
    width: 100%;
    height: 8px;
    border-top: 2px rgba(255, 255, 255, 0.5) solid;
    border-bottom: 1px rgba(255, 255, 255, 0.25) solid;
`;
