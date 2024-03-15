//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../../utils/style";

//Local styles
export const StyledCoreInfos = styled.div`
    h1 {
        position: absolute;
        left: 15px;
        bottom: 10px;
        text-shadow: 0px 1px 4px black;
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        h1 {
            left: 36px;
            bottom: 0;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        position: relative;
        flex: 1;
        margin-left: 14px;
        padding-top: 4px;
        h1 {
            position: relative;
            width: 80%;
            left: 0;
            bottom: 0;
            margin-bottom: 40px;
        }
        button {
            right: 0;
            top: 0;
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        margin-left: 24px;
        padding-top: 32px;
        h1 {
            width: 80%;
        }
    }
`;
