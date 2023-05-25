//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";
import { borders, colors, paddings } from "../../../utils/style";

//Types
type StyledNavButtonProps = {
    index: number;
    selected: boolean;
};

//Local styles
export const StyledNavButton = styled(Link)<StyledNavButtonProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${paddings.special.navBtnItself};
    text-decoration: none;
    border-right: ${borders.common.blackSlim};
    border-left: ${({ index }) =>
        index === 0 ? borders.common.blackSlim : "none"};
    ${({ selected }) =>
        selected
            ? `background-color:${colors.support.navButtonSelected}`
            : null};
    img {
        height: 34px;
    }
    p {
        padding: ${paddings.special.navBtnTxt};
        font-size: 14px;
    }
`;
