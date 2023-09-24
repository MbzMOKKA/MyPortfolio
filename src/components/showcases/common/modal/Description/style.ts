//Imports
import styled from "styled-components";
import { breakpoints, colors } from "../../../../../utils/style";

export const StyledDescription = styled.p`
    background-color: ${colors.neutral.semiOpaqueBlack};
    width: 100%;
    padding: 36px 14px;
    margin-bottom: 42px;
    line-height: 1.65;
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        padding: 24px 36px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 36px;
        border-radius: 36px;
    }
`;
