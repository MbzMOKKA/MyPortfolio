//Imports
import { createGlobalStyle } from "styled-components";
import { colors } from "./";
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
        border: none;
        border-radius: 8px;
        padding: 10px;
        background-color: ${colors.neutral.button};
        border: 1px rgba(255, 255, 255, 0.3) solid;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.65);
        font-size: 16px;
    }
`;
