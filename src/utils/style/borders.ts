//Imports
import colors from "./colors";

//Exports
const borders = {
    common: {
        blackSlim: `1px solid black`,
        modal: `1px rgba(255, 255, 255, 0.3) solid`,
        button: `1px rgba(255, 255, 255, 0.2) solid`,
    },
    special: {
        closeBtn: `3px ${colors.support.negative} solid`,
        navBarTop: `4px ${colors.support.navButtonSelected} solid`,
        separatorTop: `2px rgba(255, 255, 255, 0.5) solid`,
        separatorBottom: `1px rgba(255, 255, 255, 0.25) solid`,
    },
    radius: {
        normal: `${8}px`,
        modal: `${14}px`,
        round: `${50}%`,
    },
    debug: {
        red: `${1}px solid red`,
        green: `${1}px solid green`,
        blue: `${1}px solid blue`,
    },
};

export default borders;
