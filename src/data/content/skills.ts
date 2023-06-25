import { ICONS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";

export type Skill = {
    id: string;
    nameId: string;
    logo: string;
    dateBegin: string;
    mastery: number;
    descriptionId: string;
};

const skills: Skill[] = [
    {
        id: "typescript",
        nameId: STRING_IDS.typescript,
        logo: ICONS.call,
        dateBegin: "2022-11-07",
        mastery: 70,
        descriptionId: STRING_IDS.changeLanguage,
    },
    {
        id: "gamemaker",
        nameId: STRING_IDS.gamemaker,
        logo: ICONS.call,
        dateBegin: "2018-10-20",
        mastery: 80,
        descriptionId: STRING_IDS.changeLanguage,
    },
    {
        id: "tailwind",
        nameId: STRING_IDS.tailwind,
        logo: ICONS.call,
        dateBegin: "2023-06-25",
        mastery: 5,
        descriptionId: STRING_IDS.changeLanguage,
    },
];

export default skills;
