//Imports
import { MasteryLevel } from "../../data/content/skills";

//Exports
export default function getMasteryLevelName(mastery: number) {
    switch (mastery) {
        case MasteryLevel.novice:
            return `Novice`;
        case MasteryLevel.beginner:
            return `Débutant`;
        case MasteryLevel.intermediate:
            return `Intermédiaire`;
        case MasteryLevel.advanced:
            return `Confirmé`;
        case MasteryLevel.expert:
            return `Expert`;
        default:
            return `{MAÎTRISE}`;
    }
}
