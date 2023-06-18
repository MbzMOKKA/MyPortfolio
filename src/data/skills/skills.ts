import { ICONS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";

export type Skill = {
    urlName: string;
    nameId: string;
    logo: string;
    dateBegin: string;
    mastery: number;
    descriptionId: string;
};

const skills: Skill[] = [
    {
        urlName: "typescript",
        nameId: STRING_IDS.typescript,
        logo: ICONS.call,
        dateBegin: "2020-02-01",
        mastery: 60,
        descriptionId: STRING_IDS.changeLanguage,
    },
];

export default skills;
