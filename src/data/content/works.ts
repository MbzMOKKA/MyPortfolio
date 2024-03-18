//Imports
import { ICONS, THUMBNAILS } from "../../assets/images";
import { Cta, Media, SHOWCASE_TYPES } from "../miscTypes";
import { Skills } from "./skills";
import { STRINGS } from "./strings";

//Types
export type Work = {
    id: string;
    nameId: string;
    thumbnail: string;
    thumbnailHQ: string;
    dateStart: string;
    dateEnd?: string;
    type: SHOWCASE_TYPES;
    importance: number;
    skillsUsed: any[];
    descriptionId: string;
    medias: Media[];
    ctas: Cta[];
};

//Exports
const works: Work[] = [
    {
        id: "direct-brico",
        nameId: STRINGS.directBrico,
        thumbnail: THUMBNAILS.directBrico,
        thumbnailHQ: THUMBNAILS.directBricoHQ,
        dateStart: "2022-12-19",
        dateEnd: "2023-08-23",
        type: SHOWCASE_TYPES.webSite,
        importance: 125,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.reactNative,
            Skills.nextJs,
            Skills.sass,
            Skills.redux,
            Skills.jest,
            Skills.figma,
        ],
        descriptionId: STRINGS.workDescDirectBrico,
        medias: [],
        ctas: [],
    },
    {
        id: "oh-my-food",
        nameId: STRINGS.ohMyFood,
        thumbnail: THUMBNAILS.ohMyFood,
        thumbnailHQ: THUMBNAILS.ohMyFoodHQ,
        dateStart: "2022-03-29",
        dateEnd: "2022-04-13",
        type: SHOWCASE_TYPES.webSite,
        importance: 50,
        skillsUsed: [Skills.html, Skills.css, Skills.sass],
        descriptionId: STRINGS.workDescOhMyFood,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewSite,
                icon: ICONS.link,
                action: "https://mbzmokka.github.io/ohmyfood/",
            },
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MbzMOKKA/ohmyfood",
            },
        ],
    },
    {
        id: "argent-bank",
        nameId: STRINGS.argentBank,
        thumbnail: THUMBNAILS.argentBank,
        thumbnailHQ: THUMBNAILS.argentBankHQ,
        dateStart: "2023-04-10",
        dateEnd: "2023-06-02",
        type: SHOWCASE_TYPES.webSite,
        importance: 60,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.axios,
            Skills.redux,
        ],
        descriptionId: STRINGS.workDescArgentBank,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MokkaReactJsCourseProjects/ArgentBankFront",
            },
        ],
    },
    {
        id: "hr-net",
        nameId: STRINGS.hrNet,
        thumbnail: THUMBNAILS.hrNet,
        thumbnailHQ: THUMBNAILS.hrNetHQ,
        dateStart: "2023-06-26",
        dateEnd: "2023-08-15",
        type: SHOWCASE_TYPES.webSite,
        importance: 75,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.nextJs,
            Skills.createReactApp,
            Skills.tailwindCss,
            Skills.redux,
            Skills.uiDesign,
        ],
        descriptionId: STRINGS.workDescHrNet,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewSite,
                icon: ICONS.link,
                action: "https://hr-net-alpha.vercel.app/",
            },
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MokkaReactJsCourseProjects/HRNet",
            },
        ],
    },
    /*{
        id: "survivalcraft-manager",
        nameId: STRINGS.scManager,
        thumbnail:ICONS.cross,
        dateStart: "2020-02-01",
        dateEnd: undefined,
        type: SHOWCASE_TYPES.other,
        importance: 100,
        skillsUsed: [],
        descriptionId: STRINGS.placeholder,
        medias: [],
        ctas: [],
    },*/
    {
        id: "groupomania",
        nameId: STRINGS.groupomania,
        thumbnail: THUMBNAILS.groupomania,
        thumbnailHQ: THUMBNAILS.groupomaniaHQ,
        dateStart: "2022-08-25",
        dateEnd: "2022-09-26",
        type: SHOWCASE_TYPES.webSite,
        importance: 100,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.axios,
            Skills.uiDesign,
            Skills.uxDesign,
            Skills.nodeJs,
            Skills.expressJs,
            Skills.mongoDB,
        ],
        descriptionId: STRINGS.workDescGroupomania,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MbzMOKKA/GroupomaniaSocialTool",
            },
        ],
    },
    {
        id: "my-portfolio",
        nameId: STRINGS.myPortfolio,
        thumbnail: THUMBNAILS.portfolio,
        thumbnailHQ: THUMBNAILS.portfolioHQ,
        dateStart: "2023-04-24",
        dateEnd: undefined,
        type: SHOWCASE_TYPES.webSite,
        importance: 100,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.typeScript,
            Skills.react,
            Skills.createReactApp,
            Skills.styledComponents,
            Skills.redux,
        ],
        descriptionId: STRINGS.workDescMyPortfolio,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MbzMOKKA/MyPortfolio",
            },
        ],
    },
    {
        id: "les-petits-plats",
        nameId: STRINGS.lesPetitsPlats,
        thumbnail: THUMBNAILS.lesPetitsPlats,
        thumbnailHQ: THUMBNAILS.lesPetitsPlatsHQ,
        dateStart: "2023-09-27",
        dateEnd: "2023-11-08",
        type: SHOWCASE_TYPES.webSite,
        importance: 80,
        skillsUsed: [
            Skills.html,
            Skills.css,
            Skills.javaScript,
            Skills.tailwindCss,
            Skills.figma,
        ],
        descriptionId: STRINGS.workDescLesPetitsPlats,
        medias: [],
        ctas: [
            {
                nameId: STRINGS.viewSite,
                icon: ICONS.link,
                action: "https://mokkareactjscourseprojects.github.io/Les-petits-plats/",
            },
            {
                nameId: STRINGS.viewRepo,
                icon: ICONS.link,
                action: "https://github.com/MokkaReactJsCourseProjects/Les-petits-plats",
            },
        ],
    },
];

export default works;
