import { ICONS, irlPic } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";
import { Cta, Media } from "../miscTypes";

export enum WORK_TYPES {
    videoGame,
    webSite,
    other,
}

export type Work = {
    id: string;
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
        id: "super-mario-megalevel",
        nameId: STRING_IDS.superMarioMEGALEVEL,
        thumbnail: ICONS.call,
        dateStart: "2020-02-01",
        dateEnd: "2022-09-17",
        type: WORK_TYPES.videoGame,
        importance: 100,
        skillsUsed: ["gamemaker", "gamedesign"],
        descriptionId: STRING_IDS.workDescSuperMarioMEGALEVEL,
        medias: [{ source: "" }],
        ctas: [
            {
                nameId: STRING_IDS.openLink,
                icon: ICONS.link,
                action: "https://www.youtube.com/",
            },
            {
                nameId: STRING_IDS.openLink,
                icon: ICONS.link,
                action: "https://www.youtube.com/",
            },
        ],
    },
    {
        id: "test-project",
        nameId: STRING_IDS.superMarioMEGALEVEL,
        thumbnail: irlPic,
        dateStart: "2023-06-01",
        dateEnd: undefined,
        type: WORK_TYPES.webSite,
        importance: 50,
        skillsUsed: ["gamemaker", "gamedesign"],
        descriptionId: STRING_IDS.changeLanguage,
        medias: [{ source: "" }],
        ctas: [{ nameId: STRING_IDS.openLink, icon: ICONS.link, action: "" }],
    },
];

export default works;
