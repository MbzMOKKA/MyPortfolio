//Imports
import styled from "styled-components";
import { navBarHeight } from "../../../utils/globalConstants";
import { breakpoints } from "../../../utils/style";

//Local styles
export const StyledButton = styled.button`
    position: fixed;
    bottom: ${navBarHeight + 8}px;
    right: 8px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 24px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: 56px;
        height: 56px;
        img {
            width: 30px;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        bottom: 24px;
        right: 24px;
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        bottom: 32px;
        right: 32px;
        width: 72px;
        height: 72px;
        img {
            width: 36px;
        }
    }
`;
