//Imports
import colors from "./colors";

//Exports
const shadows = {
    common: {
        button: `0px 2px 8px rgba(0, 0, 0, 0.65)`,
        modal: `0px 4px 8px black`,
    },
    special: {
        closeBtnNormal: `0px 0px 8px rgba(0, 0, 0, 0.5)`,
        closeBtnHover: `0px 0px 8px ${colors.support.negative}`,
        contactMethod: `0px 0px 5px black`,
    },
};

export default shadows;
