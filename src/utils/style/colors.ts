//Imports
import { adjustColor } from "../misc";

//Exports
const colors = {
    identity: {
        primary: "#5411E3",
        bright: "#6E0AF7",
    },
    support: {
        notSelected: "#1C1D1E",
        selected: "#332944",
        navBarSelection: "",
        informative: "#5BA6E0",
        warning: "#EDDF09",
        negative: "#DC441B",
        positive: "#ADFD48",
        typeGame: "#9542FF",
        typeSite: "#58BFF7",
        typeOther: "#EAD373",
        typeHardSkill: "#7AF05A",
        active: "#000000",
        scrollbar: "#FFFFFF44",
    },
    neutral: {
        textDefault: "#CCCCCC",
        settingsBg: "#545454",
        bodyBgColor: "#2F3342",
        semiOpaqueBlack: "rgba(0, 0, 0, 0.25)",
        semiOpaqueWhite: "rgba(255, 255, 255, 0.125)",
    },
};

colors.support.navBarSelection = adjustColor(colors.identity.primary, 0.75);

export default colors;
