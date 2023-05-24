//Imports
import styled from "styled-components";
import { colors } from "../../../utils/style";
import { adjustColor } from "../../../utils/misc";
import { navBarHeight } from "../../../utils/globalConstants";

//Local styles
export const StyledNavBar = styled.nav`
    background-color: ${colors.support.notSelected};
    position: fixed;
    width: 100%;
    height: ${navBarHeight}px;
    bottom: 0;
    border-top: 4px ${adjustColor(colors.support.notSelected, 0.5)} solid;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 6%;
    width: 100%;
    height: 100%;
    border-top: 4px ${colors.support.navButtonSelected} solid;
`;
