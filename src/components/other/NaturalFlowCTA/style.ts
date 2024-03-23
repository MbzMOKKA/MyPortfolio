//Imports
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../../utils/style";

//Local styles
export const StyledLink = styled(Link)`
    width: fit-content;
    margin: auto;
    font-size: 18px;
    font-weight: bold;
    padding: 16px 32px;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        font-size: 24px;
        padding: 20px 40px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        font-size: 32px;
        padding: 24px 48px;
    }
`;
