//Imports
import styled from "styled-components";
import { colors, margins } from "../../utils/style";

//Local styles
const cardsPerLine = 1;

export const StyledMain = styled.main`
    position: relative;
`;

export const StyledTopSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const StyledStats = styled.div`
    background-color: ${colors.neutral.semiOpaqueWhite};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    padding: 6px;
`;

export const StyledResultCount = styled.p`
    margin-left: ${margins.mainHorizontal};
    font-size: 20px;
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(${cardsPerLine}, 1fr);
    grid-gap: ${margins.grid};
    padding-top: 24px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 128px;
`;
