//Imports
import { createGlobalStyle } from "styled-components";
import { borders, colors, paddings, shadows } from "./";
import { navBarHeight } from "../globalConstants";

//Global styles
export default createGlobalStyle`
    * {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${colors.neutral.textDefault};
    }
    #root{
        display: flex;
        flex-direction: column;
        position: relative;
        padding-bottom: ${navBarHeight}px;
    }
    h1{ /*Name of something major (page title, section name...*/
        font-weight: bold;
        font-size: 26px;
    }
    h2{ /*Name of something important (modal, project, contact...)*/
        font-weight: bold;
        font-size: 18px;
    }
    p{
        font-size: 15px;
        line-height: 1.4;
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
        padding: ${paddings.button};
        background-color: ${colors.identity.primary};
        box-shadow: ${shadows.button};
        font-size: 14px;
    }
`;
