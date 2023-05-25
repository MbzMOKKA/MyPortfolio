//Imports
import styled from "styled-components";
import { borders, colors, shadows } from "../../../utils/style";

//Common constants
const buttonSize = "40px";

//Local styles
export const StyledButton = styled.button`
    width: ${buttonSize};
    height: ${buttonSize};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.neutral.semiOpaqueBlack};
    border: ${borders.special.closeBtn};
    border-radius: 50%;
    box-shadow: ${shadows.special.closeBtnNormal};
    img {
        width: 18px;
    }
    :hover {
        box-shadow: ${shadows.special.closeBtnHover};
    }
`;
