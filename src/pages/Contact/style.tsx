//Imports
import styled from "styled-components";
import { paddings } from "../../utils/style";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
`;

export const StyledPageTitle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.4);
    h1 {
        margin-top: 70px;
        margin-bottom: 4px;
        margin-left: ${paddings.mainHorizontal};
        margin-right: ${paddings.mainHorizontal};
    }
`;

export const StyledMethods = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: ${paddings.mainHorizontal};
    padding-right: ${paddings.mainHorizontal};
`;
