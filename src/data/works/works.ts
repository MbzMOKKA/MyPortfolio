import { ICONS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";
import { Cta, Media } from "../miscTypes";

export enum WORK_TYPES {
    videoGame,
    webSite,
    other,
}

export type Work = {
    urlName: string;
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
        urlName: "super-mario-megalevel",
        nameId: STRING_IDS.superMarioMEGALEVEL,
        thumbnail: ICONS.call,
        dateStart: "2020-02-01",
        dateEnd: "2022-09-15",
        type: WORK_TYPES.videoGame,
        importance: 100,
        skillsUsed: ["GameMaker", "Paint"],
        descriptionId: STRING_IDS.changeLanguage,
        medias: [{ source: "" }],
        ctas: [{ nameId: STRING_IDS.openLink, icon: ICONS.link, action: "" }],
    },
    {
        urlName: "test-project",
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
