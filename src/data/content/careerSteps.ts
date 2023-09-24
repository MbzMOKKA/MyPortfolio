//Imports
import { STRING_IDS } from "../locales/stringIds";

//Types
export type CareerStep = {
    date: number;
    nameId: string;
    descriptionId: string;
};

//Exports
const careerSteps: CareerStep[] = [
    //Middleschool
    {
        date: 2016,
        nameId: STRING_IDS.stepMiddleschoolName,
        descriptionId: STRING_IDS.stepMiddleschoolText,
    },
    //Highschool
    {
        date: 2017,
        nameId: STRING_IDS.stepHighschoolName,
        descriptionId: STRING_IDS.stepHighschoolText,
    },
    //1.5 year break
    {
        date: 2020,
        nameId: STRING_IDS.stepSabbaticalTimeName,
        descriptionId: STRING_IDS.stepSabbaticalTimeText,
    },
    //Web dev course
    {
        date: 2022,
        nameId: STRING_IDS.stepBackToEducationName,
        descriptionId: STRING_IDS.stepBackToEducationText,
    },
    //Now
    {
        date: 2023,
        nameId: STRING_IDS.stepInternshipName,
        descriptionId: STRING_IDS.stepInternshipText,
    },
];

export default careerSteps;
