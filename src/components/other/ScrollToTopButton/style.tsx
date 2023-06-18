//Imports
import styled from "styled-components";
import { navBarHeight } from "../../../utils/globalConstants";

//Common constants
const buttonSize = "45px";

//Local styles
export const StyledButton = styled.button`
    position: fixed;
    bottom: ${navBarHeight + 8}px;
    right: 8px;
    width: ${buttonSize};
    height: ${buttonSize};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 24px;
    }
`;
