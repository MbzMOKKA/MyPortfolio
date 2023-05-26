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
    h1{ /*Page title*/
        font-weight: bold;
        font-size: 28px;
    }
    h2{ /*Name of something major (modal, project, contact...)*/
        font-weight: bold;
        font-size: 20px;
    }
    button,.button{
        text-decoration: none;
        text-align: center;
        border: ${borders.common.button};
        border-radius: ${borders.radius.normal};
        padding: ${paddings.button};
        background-color: ${colors.neutral.button};
        box-shadow: ${shadows.button};
        font-size: 14px;
    }
`;
