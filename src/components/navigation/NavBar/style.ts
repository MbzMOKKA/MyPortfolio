//Imports
import styled from "styled-components";
import { colors, breakpoints, paddings } from "../../../utils/style";
import {
    navBarHeight,
    navBarHeightLaptop,
} from "../../../utils/globalConstants";

//Local styles
export const StyledNavBar = styled.nav`
    background-color: ${colors.neutral.navigationBg};
    position: fixed;
    width: 100%;
    height: ${navBarHeight}px;
    bottom: 0;
    z-index: 3;
    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.25);
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        border-top: unset;
        bottom: unset;
        top: 0;
        height: ${navBarHeightLaptop}px;
        box-shadow: none;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5%;
    width: 100%;
    height: 100%;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        padding: 0px 20%;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        border-top: unset;
        padding: 0px ${paddings.laptop.mainHorizontal};
        justify-content: flex-end;
    }
`;
