import { ICONS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";
import { Cta, Media } from "../miscTypes";

export enum WORK_TYPES {
    videoGame,
    webSite,
    other,
}

export type Work = {
    nameId: string;
    thumbnail: string;
    dateStart: string;
    dateEnd?: string;
    type: WORK_TYPES;
    importance: number;
    skillsUsed: any[];
    descriptionId: string;
    medias: Media[];
    ctas: Cta[];
};

const works: Work[] = [
    {
        nameId: STRING_IDS.superMarioMEGALEVEL,
        thumbnail: ICONS.call,
        dateStart: "1970-01-01",
        dateEnd: undefined,
        type: WORK_TYPES.videoGame,
        importance: 200,
        skillsUsed: ["GameMaker", "Paint"],
        descriptionId: STRING_IDS.changeLanguage,
        medias: [{ source: "" }],
        ctas: [{ nameId: STRING_IDS.openLink, icon: ICONS.link, action: "" }],
    },
    {
        nameId: STRING_IDS.superMarioMEGALEVEL,
        thumbnail: ICONS.call,
        dateStart: "2023-06-01",
        dateEnd: undefined,
        type: WORK_TYPES.videoGame,
        importance: 50,
        skillsUsed: ["GameMaker", "Paint"],
        descriptionId: STRING_IDS.changeLanguage,
        medias: [{ source: "" }],
        ctas: [{ nameId: STRING_IDS.openLink, icon: ICONS.link, action: "" }],
    },
];

export default works;
