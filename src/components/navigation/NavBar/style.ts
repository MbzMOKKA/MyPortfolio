//Imports
import styled from "styled-components";
import { colors, breakpoints, paddings } from "../../../utils/style";
import { adjustColor } from "../../../utils/misc";
import { navBarHeight } from "../../../utils/globalConstants";

//Local styles
export const StyledNavBar = styled.nav`
    background-color: ${colors.support.notSelected};
    position: fixed;
    width: 100%;
    height: ${navBarHeight}px;
    bottom: 0;
    z-index: 3;
    border-top: 4px ${adjustColor(colors.support.notSelected, 0.5)} solid;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        border-top: unset;
        bottom: unset;
        top: 0;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5%;
    width: 100%;
    height: 100%;
    border-top: 4px ${colors.support.navBarSelection} solid;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        border-top: unset;
        padding: 0px ${paddings.laptop.mainHorizontal};
        justify-content: flex-end;
    }
`;
