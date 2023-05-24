//Imports
import styled from "styled-components";

//Local styles
const cardsPerLine = 2;
const cardsMargin = 20;

export const StyledMain = styled.main`
    position: relative;
    min-height: 300vh;
`;

export const StyledList = styled.ul`
    border: 1px black solid;
    display: grid;
    grid-template-columns: repeat(${cardsPerLine}, 1fr);
    grid-gap: ${cardsMargin}px;
`;

export const StyledTest = styled.p`
    position: absolute;
    bottom: 0;
`;
