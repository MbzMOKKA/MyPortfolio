//Imports
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

//Global styles
export default createGlobalStyle`
    * {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${colors.neutral.textDefault};
    }
    h1{ /*Page title*/
        font-weight: bold;
        font-size: 40px;
    }
    h2{ /*Modal title*/
        font-weight: bold;
        font-size: 30px;
    }
    button{
        border: none;
        border-radius: 8px;
        padding: 10px;
        background-color: ${colors.neutral.button};
        border: 1px rgba(255, 255, 255, 0.3) solid;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.75);
        font-size: 18px;
    }
`;

export const breakpoints = {
    desktopMinWidth: 500,
};
