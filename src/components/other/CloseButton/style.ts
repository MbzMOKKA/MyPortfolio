//Imports
import styled from "styled-components";
import { breakpoints, colors } from "../../../utils/style";

//Local styles
export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    box-shadow: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.65);
    img {
        width: 60%;
        height: 60%;
    }
    :hover {
        box-shadow: 0px 0px 8px ${colors.support.negative};
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        width: 45px;
        height: 45px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: 50px;
        height: 50px;
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        width: 60px;
        height: 60px;
    }
`;
