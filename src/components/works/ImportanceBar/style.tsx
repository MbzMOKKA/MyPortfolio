//Imports
import styled from "styled-components";

//Types
type StyledBarProps = {
    filling: number;
};

//Local styles
export const StyledLine = styled.div``;

export const StyledBar = styled.div<StyledBarProps>`
    position: relative;
    background-color: black;
    width: 90%;
    height: 4px;
    margin-top: 2px;
    div {
        position: absolute;
        background: hsl(200 ${({ filling }) => filling}% 60%);
        top: 0;
        left: 0;
        width: ${({ filling }) => filling}%;
        height: 100%;
    }
`;
