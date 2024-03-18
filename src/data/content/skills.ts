//Imports
import { LOGOS } from "../../assets/images";
import { SHOWCASE_TYPES } from "../miscTypes";
import { STRINGS } from "./strings";

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
};

export enum Skills {
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
    uiDesign = "ui-design",
    uxDesign = "ux-design",
    git = "git",
    gitHub = "github",
    npm = "npm",
    reactRouterDom = "react-router-dom",
    jest = "jest",
    chatGpt = "chat-gpt",
    videoEditing = "video-editing",
    libreOffice = "libre-office",
    vite = "vite",
    figma = "figma",
}

//Exports
const skills: Skill[] = [
    {
        id: Skills.javaScript,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.javaScript,
        logo: LOGOS.javaScript,
        logoHQ: LOGOS.javaScriptHQ,
        dateBegin: "2022-05-23",
        mastery: MasteryLevel.advanced,
    },
    {
        id: Skills.typeScript,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.typeScript,
        logo: LOGOS.typeScript,
        logoHQ: LOGOS.typeScriptHQ,
        dateBegin: "2022-11-08",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.tailwindCss,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.tailwind,
        logo: LOGOS.tailwind,
        logoHQ: LOGOS.tailwindHQ,
        dateBegin: "2023-06-26",
        mastery: MasteryLevel.beginner,
    },
    {
        id: Skills.nextJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.nextJs,
        logo: LOGOS.nextJs,
        logoHQ: LOGOS.nextJsHQ,
        dateBegin: "2023-06-05",
        mastery: MasteryLevel.beginner,
    },
    {
        id: Skills.react,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.react,
        logo: LOGOS.react,
        logoHQ: LOGOS.reactHQ,
        dateBegin: "2022-08-17",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.mongoDB,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.mongoDB,
        logo: LOGOS.mongoDB,
        logoHQ: LOGOS.mongoDBHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.beginner,
    },
    {
        id: Skills.expressJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.expressJs,
        logo: LOGOS.expressJs,
        logoHQ: LOGOS.expressJsHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.nodeJs,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.nodeJs,
        logo: LOGOS.nodeJs,
        logoHQ: LOGOS.nodeJsHQ,
        dateBegin: "2022-06-24",
        mastery: MasteryLevel.beginner,
    },
    /*{
        id: Skills.uiDesign,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.uiDesign,
        logo: ICONS.cross,
        dateBegin: "2016-06-01",
        mastery: 30,
    },*/
    /*{
        id: Skills.uxDesign,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.uxDesign,
        logo: ICONS.cross,
        dateBegin: "2016-06-01",
        mastery: 30,
    },*/
    {
        id: Skills.styledComponents,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.styledComponents,
        logo: LOGOS.styledComponents,
        logoHQ: LOGOS.styledComponentsHQ,
        dateBegin: "2022-08-20",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.sass,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.sass,
        logo: LOGOS.sass,
        logoHQ: LOGOS.sassHQ,
        dateBegin: "2022-03-26",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.css,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.css,
        logo: LOGOS.css,
        logoHQ: LOGOS.cssHQ,
        dateBegin: "2018-10-01",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.html,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.html,
        logo: LOGOS.html,
        logoHQ: LOGOS.htmlHQ,
        dateBegin: "2018-10-01",
        mastery: MasteryLevel.advanced,
    },
    {
        id: Skills.createReactApp,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.createReactApp,
        logo: LOGOS.createReactApp,
        logoHQ: LOGOS.createReactAppHQ,
        dateBegin: "2022-08-17",
        mastery: MasteryLevel.intermediate,
    },
    /*{
        id: Skills.axios,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.axios,
        logo: LOGOS.axios,
        logoHQ: LOGOS.axiosHQ,
        dateBegin: "2022-09-15",
        mastery: 30,
    },*/
    /*{
        id: Skills.reactNative,type:SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.reactNative,
        logo: LOGOS.react,
        logoHQ: LOGOS.reactHQ,
        dateBegin: "2022-12-19",
        mastery: 30,
    },*/
    /*{
        id: "electron",type:SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.electron,
        logo: LOGOS.nextJs,
        dateBegin: "2023-05-01",
        mastery: 30,
    },*/
    {
        id: Skills.redux,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.redux,
        logo: LOGOS.redux,
        logoHQ: LOGOS.reduxHQ,
        dateBegin: "2023-03-13",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.vite,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.vite,
        logo: LOGOS.vite,
        logoHQ: LOGOS.viteHQ,
        dateBegin: "2023-11-22",
        mastery: MasteryLevel.intermediate,
    },
    {
        id: Skills.figma,
        type: SHOWCASE_TYPES.hardSkill,
        nameId: STRINGS.figma,
        logo: LOGOS.figma,
        logoHQ: LOGOS.figmaHQ,
        dateBegin: "2024-01-10",
        mastery: MasteryLevel.intermediate,
    },
];

export default skills;
