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
    padding: 0;
    background-color: ${colors.neutral.semiOpaqueBlack};
    img {
        width: 60%;
        height: 60%;
    }
    :hover {
        background-color: ${colors.support.negative};
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
