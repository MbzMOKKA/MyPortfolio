//Imports
import styled from "styled-components";
import { borders } from "../../../../utils/style";

//Local styles
export const StyledBadge = styled.div`
    position: relative;
    background-color: red;
    width: 8px;
    height: 8px;
    margin-left: 12px;
    border-radius: ${borders.radius.round};
    div {
        position: absolute;
        background-color: red;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${borders.radius.round};
        animation: ongoingBeep 1500ms forwards ease-out infinite;
    }
`;
