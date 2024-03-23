//Imports
import styled from "styled-components";
import { navBarHeight } from "../../../utils/globalConstants";
import { breakpoints } from "../../../utils/style";

//Types
type StyledButtonProps = {
    visible: boolean;
};

//Local styles
export const StyledButton = styled.button<StyledButtonProps>`
    position: fixed;
    bottom: ${navBarHeight + 8}px;
    right: 8px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
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
    transform: scale(0);
    transition: transform 200ms ease-out;
    ${({ visible }) => (visible ? `transform: scale(1);` : null)}
`;
