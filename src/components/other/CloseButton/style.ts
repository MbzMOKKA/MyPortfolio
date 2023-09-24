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
    background-color: rgba(0, 0, 0, 0.65);
    border: 3px ${colors.support.negative} solid;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    animation: none;
    img {
        width: 18px;
    }
    :hover {
        box-shadow: 0px 0px 8px ${colors.support.negative};
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        width: 45px;
        height: 45px;
        img {
            width: 20px;
        }
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: 50px;
        height: 50px;
        img {
            width: 22px;
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        width: 60px;
        height: 60px;
        img {
            width: 24px;
        }
    }
`;
