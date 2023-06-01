//Imports

import colors from "./colors";

//Exports
const borders = {
    common: {
        blackSlim: `1px solid black`,
        modal: `1px rgba(255, 255, 255, 0.3) solid`,
        optionSelected: `3px ${colors.identity.bright} solid`,
        optionNotSelected: `3px transparent solid`,
    },
    radius: {
        normal: `${8}px`,
        modal: `${14}px`,
        round: `${50}%`,
    },
    debug: {
        red: `border: 1px solid red`,
        green: `border: 1px solid green`,
        blue: `border: 1px solid blue`,
    },
};

export default borders;
