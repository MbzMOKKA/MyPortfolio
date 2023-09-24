//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../utils/style";

//Local styles
export const StyledMastery = styled.div`
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        p {
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        p {
            font-size: 16px;
        }
    }
`;
