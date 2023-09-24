//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../../utils/style";

//Local styles
export const StyledAttributesOnSmallScreen = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    padding: 0 15px;
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        padding: 0 36px;
    }
`;
