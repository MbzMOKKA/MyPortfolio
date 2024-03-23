//Imports
import styled from "styled-components";
import { breakpoints, paddings, widths } from "../../utils/style";

export const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: ${widths.narrowContentLaptopMaxWidth};
    }
`;

export const StyledPageTitle = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
        margin-top: 48px;
        margin-bottom: 4px;
        margin-left: ${paddings.mobile.mainHorizontal};
        margin-right: ${paddings.mobile.mainHorizontal};
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: 100%;
        background: unset;
        h1 {
            margin-top: 64px;
            margin-bottom: 24px;
        }
    }
`;

export const StyledMethods = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-bottom: 98px;
    padding-left: ${paddings.mobile.mainHorizontal};
    padding-right: ${paddings.mobile.mainHorizontal};
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: 100%;
    }
`;
