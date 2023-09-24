//Imports
import styled from "styled-components";
import { borders, colors } from "../../../utils/style";

//Common constants
const buttonSize = "45px";

//Local styles
export const StyledButton = styled.button`
    position: fixed;
    top: 7px;
    right: 7px;
    width: ${buttonSize};
    height: ${buttonSize};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.neutral.settingsBg};
    border: none;
    border-radius: ${borders.radius.normal};
    z-index: 90;
    img {
        transition: transform 600ms;
        width: 34px;
    }
    :hover {
        img {
            transform: rotate(180deg);
        }
    }
`;
