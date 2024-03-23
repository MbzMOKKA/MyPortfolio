//Imports
import styled from "styled-components";
import { breakpoints, paddings, widths } from "../../../../utils/style";

//Local styles
export const StyledMain = styled.main`
    width: 100%;
    margin: auto;
    position: relative;
`;

export const StyledTopSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: auto;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: ${widths.narrowContentTabletMaxWidth};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: 100%;
        padding: 0px ${paddings.laptop.mainHorizontal};
    }
`;

export const StyledStats = styled.h1`
    width: 100%;
    margin: 24px 0;
    padding: 0 ${paddings.mobile.mainHorizontal};
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        padding: 0;
        margin: 12px 0;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin: 48px 0;
    }
`;
