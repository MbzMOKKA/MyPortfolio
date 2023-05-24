//Imports
import styled from "styled-components";
import { colors } from "../../../utils/style";

//Common constants
const buttonSize = "45px";

//Local styles
export const StyledButton = styled.button`
    position: fixed;
    top: 4px;
    right: 6px;
    width: ${buttonSize};
    height: ${buttonSize};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.neutral.settingsBg};
    border: none;
    border-radius: 25%;
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
