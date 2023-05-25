//Imports
import styled from "styled-components";
import { borders, paddings } from "../../utils/style";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    border: ${borders.debug.blue};
`;

export const StyledMethods = styled.section`
    display: flex;
    flex-direction: column;
    border: ${borders.debug.red};
    padding: ${paddings.common.list};
`;
