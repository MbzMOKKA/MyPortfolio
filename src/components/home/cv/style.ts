//Imports
import styled from "styled-components";
import { breakpoints, colors, paddings } from "../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    margin-top: 64px;
    padding: ${paddings.mobile.mainHorizontal};
    p {
        text-align: center;
        a {
            font-weight: bold;
            color: ${colors.identity.primaryBright};
            text-decoration: underline;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin-top: 92px;
    }
`;
