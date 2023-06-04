//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";
import { borders, colors } from "../../../utils/style";

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
    padding: 8px 0px;
    text-decoration: none;
    border-right: ${borders.common.blackSlim};
    border-left: ${({ index }) =>
        index === 0 ? borders.common.blackSlim : "none"};
    ${({ selected }) =>
        selected ? `background-color:${colors.support.navBarSelection}` : null};
    img {
        height: 28px;
        opacity: ${({ selected }) => (selected ? 1 : 0.35)};
    }
    p {
        padding: 8px 0px;
        font-size: 15px;
        opacity: ${({ selected }) => (selected ? 1 : 0.35)};
    }
`;
