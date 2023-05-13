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
`;

export const breakpoints = {
    desktopMinWidth: 500,
};
