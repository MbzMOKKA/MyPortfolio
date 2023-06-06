//Imports
import styled from "styled-components";
import { margins } from "../../utils/style";

//Local styles
const cardsPerLine = 2;

export const StyledMain = styled.main`
	position: relative;
`;

export const StyledTopSection = styled.section``;

export const StyledActions = styled.div``;

export const StyledStats = styled.div``;

export const StyledList = styled.ul`
	border: 1px black solid;
	display: grid;
	grid-template-columns: repeat(${cardsPerLine}, 1fr);
	grid-gap: ${margins.grid};
`;
