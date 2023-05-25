//Imports
import styled from "styled-components";
import { Link } from "react-router-dom";

//Local styles
export const StyledModal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #525c52;
`;

export const StyledClose = styled(Link)`
    width: 48px;
    height: 48px;
`;
