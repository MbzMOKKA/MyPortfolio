//Imports
import { adjustColor } from "../misc";

//Exports
const colors = {
    identity: {
        primary: "#5906B7",
        bright: "#8300FF",
    },
    support: {
        notSelected: "#282927",
        selected: "#5736B8",
        navButtonSelected: "?",
        informative: "#5BA6E0",
        warning: "#EDDF09",
        negative: "#EC622F",
        positive: "#ADFD48",
    },
    neutral: {
        button: "#353A2E",
        textDefault: "#FFF",
        settingsBg: "#545454",
        bodyBgColor: "#424838",
        semiOpaqueBlack: "rgba(0, 0, 0, 0.25)",
        semiOpaqueWhite: "rgba(255, 255, 255, 0.125)",
    },
};

colors.support.navButtonSelected = adjustColor(colors.support.notSelected, 2);

export default colors;
