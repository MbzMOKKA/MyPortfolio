//Imports
import { SHOWCASE_TYPES } from "../../data/miscTypes";
import { colors } from "../style";

//Exports
export function getShowcaseTypename(showcaseType: SHOWCASE_TYPES) {
    switch (showcaseType) {
        case SHOWCASE_TYPES.webSite:
            return `Site web`;
        case SHOWCASE_TYPES.hardSkill:
            return `Compétence`;
        default:
            return `{TYPE}`;
    }
}

export function getShowcaseTypeColor(showcaseType: SHOWCASE_TYPES) {
    switch (showcaseType) {
        case SHOWCASE_TYPES.webSite:
            return colors.support.typeSite;
        case SHOWCASE_TYPES.hardSkill:
            return colors.support.typeHardSkill;
        default:
            return "#000000";
    }
}
