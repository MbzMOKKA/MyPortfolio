//Imports
import styled from "styled-components";
import { borders, breakpoints, colors, widths } from "../../../../utils/style";
import { AreaSeparator } from "../../../other";

//Local styles
export const StyledMain = styled.main`
    width: 100%;
    margin: auto;
    position: relative;
`;

export const StyledTopSection = styled.section`
    background-color: ${colors.neutral.semiOpaqueWhite};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: auto;
    padding: 6px;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
        margin: 48px auto;
        padding: 16px;
        border-radius: ${borders.radius.normal};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: ${widths.narrowContentLaptopMaxWidth};
    }
`;

export const StyledStats = styled.p`
    width: 100%;
    font-size: 15px;
    color: white;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        text-align: center;
        font-size: 20px;
    }
`;

export const StyledSeparator = styled(AreaSeparator)`
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        display: none;
    }
`;
