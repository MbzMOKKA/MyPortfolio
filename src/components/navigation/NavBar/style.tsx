//Imports
import styled from 'styled-components';
import { colorNavBar, colorNavButtonSelected } from '../../../utils/style/colors';
import adjustColor from '../../../utils/misc/adjustColor';
import { navBarHeight } from '../../../utils/globalConstants';

//Local styles
export const StyledNavBar = styled.nav`
    background-color: ${colorNavBar};
    position: fixed;
    width: 100%;
    height: ${navBarHeight}px;
    bottom: 0;
    border-top: 6px ${adjustColor(colorNavBar, 0.5)} solid;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;
    width: 100%;
    height: 100%;
    border-top: 6px ${colorNavButtonSelected} solid;
`;
