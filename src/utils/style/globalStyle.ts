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
        font-size: 30px;
    }
    h2{ /*Modal title*/
        font-weight: bold;
        font-size: 24px;
    }
    button{
        border: ${borders.common.button};
        border-radius: ${borders.radius.normal};
        padding: ${paddings.common.button};
        background-color: ${colors.neutral.button};
        box-shadow: ${shadows.common.button};
        font-size: 16px;
    }
`;
