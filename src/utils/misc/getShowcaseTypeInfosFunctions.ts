import { STRINGS } from "../../data";
import { SHOWCASE_TYPES } from "../../data/miscTypes";
import { colors } from "../style";

export function getShowcaseTypeNameId(showcaseType: SHOWCASE_TYPES) {
    switch (showcaseType) {
        case SHOWCASE_TYPES.webSite:
            return STRINGS.webSite;
        case SHOWCASE_TYPES.hardSkill:
            return STRINGS.hardSkill;
        default:
            return STRINGS.other;
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
