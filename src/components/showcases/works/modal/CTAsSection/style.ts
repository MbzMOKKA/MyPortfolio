//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 15px;
    margin-bottom: 4px;
    a {
        width: 100%;
        margin-top: 10px;
        img {
            width: 18px;
            height: auto;
            margin-left: 8px;
        }
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        padding: 0px 36px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 0;
    }
`;
