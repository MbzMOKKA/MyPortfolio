//Imports
import styled from "styled-components";
import { margins, paddings } from "../../utils/style";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
`;

export const StyledPageTitle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.25);
    h1 {
        margin: ${margins.common.pageTitle};
    }
`;

export const StyledMethods = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${paddings.common.list};
`;
