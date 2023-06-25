import { STRING_IDS } from "../../data";

export default function getMasteryStringId(mastery: number) {
    if (mastery < 20) {
        return STRING_IDS.novice;
    } else {
        if (mastery < 50) {
            return STRING_IDS.beginner;
        } else {
            if (mastery < 70) {
                return STRING_IDS.intermediate;
            } else {
                if (mastery < 85) {
                    return STRING_IDS.advanced;
                } else {
                    return STRING_IDS.expert;
                }
            }
        }
    }
}
