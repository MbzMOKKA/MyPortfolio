import { STRINGS } from "../../data";
import { MasteryLevel } from "../../data/content/skills";

export default function getMasteryStringId(mastery: number) {
    switch (mastery) {
        case MasteryLevel.novice:
            return STRINGS.novice;
        case MasteryLevel.beginner:
            return STRINGS.beginner;
        case MasteryLevel.intermediate:
            return STRINGS.intermediate;
        case MasteryLevel.advanced:
            return STRINGS.advanced;
        case MasteryLevel.expert:
            return STRINGS.expert;
        default:
            return STRINGS.placeholder;
    }
}
