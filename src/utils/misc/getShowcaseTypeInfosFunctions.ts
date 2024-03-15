import { STRING_IDS } from "../../data";
import { SHOWCASE_TYPES } from "../../data/miscTypes";
import { colors } from "../style";

export function getShowcaseTypeNameId(showcaseType: SHOWCASE_TYPES) {
    switch (showcaseType) {
        case SHOWCASE_TYPES.webSite:
            return STRING_IDS.webSite;
        case SHOWCASE_TYPES.hardSkill:
            return STRING_IDS.hardSkill;
        default:
            return STRING_IDS.other;
    }
}

export function getShowcaseTypeColor(showcaseType: SHOWCASE_TYPES) {
    switch (showcaseType) {
        case SHOWCASE_TYPES.webSite:
            return colors.support.typeSite;
        case SHOWCASE_TYPES.hardSkill:
            return colors.support.typeHardSkill;
        default:
            return colors.support.typeOther;
    }
}
