//Imports
import styled from "styled-components";
import { breakpoints } from "../../utils/style";

//Local styles
export const StyledMain = styled.main`
    padding: 10px;
    padding-top: 64px;
    p {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 18px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: 400px;
        margin: auto;
        padding-top: 128px;
    }
`;

export const StyledImage = styled.div`
    margin: 36px auto;
    width: 128px;
    height: 128px;
    img {
        width: 100%;
        height: 100%;
    }
`;
