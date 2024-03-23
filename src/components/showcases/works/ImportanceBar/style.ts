//Imports
import styled from "styled-components";
import { borders, colors } from "../../../../utils/style";

//Types
type StyledBarProps = {
    filling: number;
};

//Local styles
export const StyledLine = styled.div`
    flex: 1;
    p {
        font-size: 12px;
    }
`;

export const StyledBar = styled.div<StyledBarProps>`
    position: relative;
    background-color: black;
    width: 100%;
    height: 5px;
    margin-top: 3px;
    border-radius: ${borders.radius.round};
    overflow: hidden;
    div {
        position: absolute;
        background-color: ${colors.support.typeSite};
        top: 0;
        left: 0;
        width: ${({ filling }) => filling}%;
        height: 100%;
    }
`;
