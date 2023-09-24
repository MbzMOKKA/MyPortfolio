//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";
import { borders, colors, breakpoints } from "../../../utils/style";

//Types
type StyledNavButtonProps = {
    index: number;
    selected: boolean;
};

//Local styles
const buttonLaptopHorizontalPadding = "24px";

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
        width: auto;
        height: 28px;
        opacity: ${({ selected }) => (selected ? 1 : 0.35)};
    }
    p {
        color: white;
        padding: 8px 0px;
        font-size: 15px;
        opacity: ${({ selected }) => (selected ? 1 : 0.35)};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        background-color: unset;
        width: auto;
        flex-direction: row;
        margin-left: 24px;
        padding: 16px ${buttonLaptopHorizontalPadding} 8px
            ${buttonLaptopHorizontalPadding};
        border: none;
        border-bottom: 8px transparent solid;
        ${({ selected }) =>
            selected
                ? `border-color: ${colors.support.navBarSelection}`
                : null};
        img {
            height: 26px;
            margin-right: 8px;
        }
        p {
            font-size: 17px;
        }
        :hover {
            img,
            p {
                opacity: 1;
            }
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        margin-left: 36px;
        img {
            height: 30px;
            margin-right: 12px;
        }
        p {
            font-size: 20px;
        }
    }
`;
