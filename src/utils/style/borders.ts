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
        round: `${999}px`,
    },
};

export default borders;
