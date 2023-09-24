//Imports
import styled from "styled-components";
import { borders, breakpoints } from "../../../../utils/style";

//Types
type StyledBarProps = {
    filling: number;
};

//Local styles
export const StyledLine = styled.div`
    flex: 1;
`;

export const StyledBar = styled.div<StyledBarProps>`
    position: relative;
    background-color: black;
    width: 90%;
    height: 4px;
    margin-top: 2px;
    border-radius: ${borders.radius.round};
    overflow: hidden;
    div {
        position: absolute;
        background: hsl(260 ${({ filling }) => filling}% 60%);
        top: 0;
        left: 0;
        width: ${({ filling }) => filling}%;
        height: 100%;
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        max-width: 300px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: 100%;
        height: 6px;
        max-width: 400px;
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        height: 8px;
    }
`;
