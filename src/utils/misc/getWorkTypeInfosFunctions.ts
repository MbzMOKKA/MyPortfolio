import { STRING_IDS } from "../../data";
import { WORK_TYPES } from "../../data/content/works";
import { colors } from "../style";

export function getWorkTypeNameId(workType: WORK_TYPES) {
    switch (workType) {
        case WORK_TYPES.videoGame:
            return STRING_IDS.videoGame;
        case WORK_TYPES.webSite:
            return STRING_IDS.webSite;
        default:
            return STRING_IDS.other;
    }
}

export function getWorkTypeColor(workType: WORK_TYPES) {
    switch (workType) {
        case WORK_TYPES.videoGame:
            return colors.support.typeGame;
        case WORK_TYPES.webSite:
            return colors.support.typeSite;
        default:
            return colors.support.typeOther;
    }
}
