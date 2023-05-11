//Imports
import { createGlobalStyle } from 'styled-components';

//Global styles
export default createGlobalStyle`
    * {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
    }
`;

export const breakpoints = {
    desktopMinWidth: 500,
};
