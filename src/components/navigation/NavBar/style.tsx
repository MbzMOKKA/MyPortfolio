//Imports
import styled from "styled-components";
import { borders, colors, paddings } from "../../../utils/style";
import { adjustColor } from "../../../utils/misc";
import { navBarHeight } from "../../../utils/globalConstants";

//Local styles
export const StyledNavBar = styled.nav`
    background-color: ${colors.support.notSelected};
    position: fixed;
    width: 100%;
    height: ${navBarHeight}px;
    bottom: 0;
    border-top: ${borders.special.navBarTop};
    border-color: ${adjustColor(colors.support.notSelected, 0.5)};
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${paddings.special.navBar};
    width: 100%;
    height: 100%;
    border-top: ${borders.special.navBarTop};
`;
