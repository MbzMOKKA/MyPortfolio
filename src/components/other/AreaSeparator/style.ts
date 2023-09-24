//Imports
import styled from "styled-components";
import { borders } from "../../../utils/style";

//Local styles
export const StyledModalHeaderSeparator = styled.div`
    width: 100%;
    height: 8px;
    border-top: 2px rgba(255, 255, 255, 0.5) solid;
    border-bottom: 1px rgba(255, 255, 255, 0.25) solid;
`;

export const StyledSimpleSeparatorUpward = styled.div`
    width: 100%;
    height: 10px;
    border-bottom: ${borders.common.blackSlim};
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

export const StyledSimpleSeparatorDownward = styled.div`
    width: 100%;
    height: 10px;
    border-top: ${borders.common.blackSlim};
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
`;
