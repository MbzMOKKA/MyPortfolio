//Imports
import { adjustColor } from "../misc";

//Exports
const colors = {
    identity: {
        primary: "#5411E3",
        bright: "#5F14FF",
    },
    support: {
        notSelected: "#1C1D1E",
        selected: "#332944",
        navButtonSelected: "?",
        informative: "#5BA6E0",
        warning: "#EDDF09",
        negative: "#DC441B",
        positive: "#ADFD48",
    },
    neutral: {
        textDefault: "#FFF",
        settingsBg: "#545454",
        bodyBgColor: "#2F3342",
        semiOpaqueBlack: "rgba(0, 0, 0, 0.25)",
        semiOpaqueWhite: "rgba(255, 255, 255, 0.125)",
    },
};

colors.support.navButtonSelected = adjustColor(colors.support.notSelected, 2);

export default colors;
