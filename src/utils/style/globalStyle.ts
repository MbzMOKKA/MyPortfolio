//Imports
import { createGlobalStyle } from "styled-components";
import { borders, colors, paddings, shadows, breakpoints } from "./";
import { navBarHeight } from "../globalConstants";

//Global styles
export default createGlobalStyle`
    * {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
    }
    #root{
        display: flex;
        flex-direction: column;
        position: relative;
        padding-bottom: ${navBarHeight}px;
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            padding-bottom:0;
            padding-top: ${navBarHeight}px;
        }
    }
    html{
        scrollbar-color: ${colors.support.scrollbar} ${colors.support.notSelected};
    }
    body{
        overflow-y: scroll;
    }
    h1{ /*Name of something major (page title, section name...*/
        font-weight: bold;
        font-size: 24px;
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            font-size: 36px;
        }
    }
    h2{ /*Name of something important (modal, project, contact...)*/
        font-weight: bold;
        font-size: 18px;
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            font-size: 26px;
        }
    }
    p{
        font-size: 14px;
        line-height: 1.5;
        color:${colors.neutral.textDefault};
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            font-size: 18px;
            line-height: 1.7;
        }
    }
    a{
        text-decoration: none;
    }
    button,.button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-align: center;
        border: none;
        border-radius: ${borders.radius.normal};
        padding: ${paddings.mobile.button};
        background-color: ${colors.identity.primary};
        box-shadow: ${shadows.button};
        font-size: 14px;
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            font-size: 18px;
        }
        :hover{
            cursor: pointer;
            background-color: ${colors.support.active};
        }
    }
`;
