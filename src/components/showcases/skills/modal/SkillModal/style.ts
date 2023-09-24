//Imports
import styled from "styled-components";
import MasteryBar from "../../MasteryBar";
import { breakpoints } from "../../../../../utils/style";

//Local styles
export const StyledMasteryBar = styled(MasteryBar)`
    margin-right: 72px;
    p {
        font-size: 16px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        p {
            font-size: 18px;
        }
    }
`;
