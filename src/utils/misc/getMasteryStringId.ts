import { STRING_IDS } from "../../data";
import { MasteryLevel } from "../../data/content/skills";

export default function getMasteryStringId(mastery: number) {
	switch (mastery) {
		case MasteryLevel.novice:
			return STRING_IDS.novice;
		case MasteryLevel.beginner:
			return STRING_IDS.beginner;
		case MasteryLevel.intermediate:
			return STRING_IDS.intermediate;
		case MasteryLevel.advanced:
			return STRING_IDS.advanced;
		case MasteryLevel.expert:
			return STRING_IDS.expert;
		default:
			return STRING_IDS.placeholder;
	}
}
