//Imports
import { LOGOS } from "../../assets/images";
import { STRING_IDS } from "../locales/stringIds";
import { SHOWCASE_TYPES } from "../miscTypes";

//Types
export enum MasteryLevel {
    novice,
    beginner,
    intermediate,
    advanced,
    expert,
}

export type Skill = {
    id: string;
    type: SHOWCASE_TYPES;
    nameId: string;
    logo: string;
    logoHQ: string;
    dateBegin: string;
    mastery: MasteryLevel;
    descriptionId: string;
};

export enum Skills {
    gameMaker = "gamemaker",
    javaScript = "javascript",
    typeScript = "typescript",
    nodeJs = "node-js",
    nextJs = "next-js",
    react = "react",
    reactNative = "react-native",
    createReactApp = "create-react-app",
    html = "html",
    css = "css",
    sass = "sass",
    styledComponents = "styled-components",
    tailwindCss = "tailwind-css",
    redux = "redux",
    axios = "axios",
    expressJs = "express-js",
    mongoDB = "mongo-db",
    gameDesign = "game-design",
    uiDesign = "ui-design",
    uxDesign = "ux-design",
    git = "git",
    gitHub = "github",
    npm = "npm",
    reactRouterDom = "react-router-dom",
    jest = "jest",
    communication = "communication",
    chatGpt = "chat-gpt",
    videoEditing = "video-editing",
    libreOffice = "libre-office",
}

//Exports
const skills: Skill[] = [
    {
        id: Skills.javaScript,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.javaScript,
        logo: LOGOS.javaScript,
        logoHQ: LOGOS.javaScriptHQ,
        dateBegin: "2022-05-23",
        mastery: MasteryLevel.advanced,
        descriptionId: STRING_IDS.skillDescJavaScript,
    },
    {
        id: Skills.typeScript,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.typeScript,
        logo: LOGOS.typeScript,
        logoHQ: LOGOS.typeScriptHQ,
        dateBegin: "2022-11-08",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescTypeScript,
    },
    /*{
        id: Skills.gameMaker,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.gameMaker,
        logo: LOGOS.gameMaker,
        logoHQ: LOGOS.gameMakerHQ,
        dateBegin: "2018-10-20",
        mastery: 80,
        descriptionId: STRING_IDS.skillDescGameMaker,
    },*/
    /*{
        id: Skills.gameDesign,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.gameDesign,
        logo: ICONS.cross,
        dateBegin: "2016-10-01",
        mastery: 50,
        descriptionId: STRING_IDS.skillDescMongoDb,
    },*/
    {
        id: Skills.tailwindCss,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.tailwind,
        logo: LOGOS.tailwind,
        logoHQ: LOGOS.tailwindHQ,
        dateBegin: "2023-06-26",
        mastery: MasteryLevel.beginner,
        descriptionId: STRING_IDS.skillDescTailwind,
    },
    {
        id: Skills.nextJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.nextJs,
        logo: LOGOS.nextJs,
        logoHQ: LOGOS.nextJsHQ,
        dateBegin: "2023-06-05",
        mastery: MasteryLevel.beginner,
        descriptionId: STRING_IDS.skillDescNextJs,
    },
    {
        id: Skills.react,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.react,
        logo: LOGOS.react,
        logoHQ: LOGOS.reactHQ,
        dateBegin: "2022-08-17",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescReact,
    },
    {
        id: Skills.mongoDB,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.mongoDB,
        logo: LOGOS.mongoDB,
        logoHQ: LOGOS.mongoDBHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.beginner,
        descriptionId: STRING_IDS.skillDescMongoDb,
    },
    {
        id: Skills.expressJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.expressJs,
        logo: LOGOS.expressJs,
        logoHQ: LOGOS.expressJsHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescExpressJs,
    },
    {
        id: Skills.nodeJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.nodeJs,
        logo: LOGOS.nodeJs,
        logoHQ: LOGOS.nodeJsHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.beginner,
        descriptionId: STRING_IDS.skillDescNodeJs,
    },
    /*{
        id: Skills.uiDesign,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.uiDesign,
        logo: ICONS.cross,
        dateBegin: "2016-06-01",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    /*{
        id: Skills.uxDesign,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.uxDesign,
        logo: ICONS.cross,
        dateBegin: "2016-06-01",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    {
        id: Skills.styledComponents,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.styledComponents,
        logo: LOGOS.styledComponents,
        logoHQ: LOGOS.styledComponentsHQ,
        dateBegin: "2022-08-20",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescStyledComponents,
    },
    {
        id: Skills.sass,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.sass,
        logo: LOGOS.sass,
        logoHQ: LOGOS.sassHQ,
        dateBegin: "2022-03-26",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescSass,
    },
    {
        id: Skills.css,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.css,
        logo: LOGOS.css,
        logoHQ: LOGOS.cssHQ,
        dateBegin: "2018-10-01",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescCss,
    },
    {
        id: Skills.html,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.html,
        logo: LOGOS.html,
        logoHQ: LOGOS.htmlHQ,
        dateBegin: "2018-10-01",
        mastery: MasteryLevel.advanced,
        descriptionId: STRING_IDS.skillDescHtml,
    },
    {
        id: Skills.createReactApp,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.createReactApp,
        logo: LOGOS.createReactApp,
        logoHQ: LOGOS.createReactAppHQ,
        dateBegin: "2022-08-17",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescCreateReactApp,
    },
    /*{
        id: "libre-office",type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.libreOffice,
        logo: LOGOS.nextJs,
        dateBegin: "2016-01-01",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    /*{
        id: "video-editing",type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.videoEditing,
        logo: LOGOS.nextJs,
        dateBegin: "2016-04-01",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    /*{
        id: Skills.axios,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.axios,
        logo: LOGOS.axios,
        logoHQ: LOGOS.axiosHQ,
        dateBegin: "2022-09-15",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    /*{
        id: Skills.reactNative,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.reactNative,
        logo: LOGOS.react,
        logoHQ: LOGOS.reactHQ,
        dateBegin: "2022-12-19",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    /*{
        id: "electron",type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.electron,
        logo: LOGOS.nextJs,
        dateBegin: "2023-05-01",
        mastery: 30,
        descriptionId: STRING_IDS.placeholder,
    },*/
    {
        id: Skills.redux,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.redux,
        logo: LOGOS.redux,
        logoHQ: LOGOS.reduxHQ,
        dateBegin: "2023-03-13",
        mastery: MasteryLevel.intermediate,
        descriptionId: STRING_IDS.skillDescRedux,
    },
    /*{
        id: "scratch",type:SHOWCASE_TYPES.hardSkill,
        nameId: STRING_IDS.scratch,
        logo: LOGOS.nextJs,
        dateBegin: "2016-06-01",
        mastery: 70,
        descriptionId: STRING_IDS.placeholder,
    },*/
];

export default skills;
