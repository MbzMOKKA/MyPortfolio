//Imports
import styled from "styled-components";
import { breakpoints, paddings } from "../../../../../utils/style";

//Local styles
export const StyledCoreInfos = styled.div`
    width: 100%;
    h1 {
        padding: 12px ${paddings.mobile.mainHorizontal};
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        h1 {
            padding: 12px 15%;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        position: relative;
        flex: 1;
        margin-left: 14px;
        padding-top: 4px;
        h1 {
            width: 80%;
            padding: 0;
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
