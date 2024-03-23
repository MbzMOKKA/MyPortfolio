//Imports
import styled from "styled-components";
import { breakpoints } from "../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    width: 55%;
    margin: auto;
    padding-top: 144px;
    padding-bottom: 12px;
    p {
        text-align: center;
        font-style: italic;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        padding-top: 164px;
        padding-bottom: 18px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding-top: 188px;
        padding-bottom: 24px;
    }
`;
