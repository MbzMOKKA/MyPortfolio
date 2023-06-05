//Imports
import { STRING_IDS } from "../locales/stringIds";

//Types
type CareerStep = {
    date: number;
    nameId: string;
    textId: string;
};

//Exports
const careerSteps: CareerStep[] = [
    //Middleschool
    {
        date: 2016,
        nameId: STRING_IDS.stepMiddleschoolName,
        textId: STRING_IDS.stepMiddleschoolText,
    },
    //Highschool
    {
        date: 2017,
        nameId: STRING_IDS.stepHighschoolName,
        textId: STRING_IDS.stepHighschoolText,
    },
    //1.5 year break
    {
        date: 2020,
        nameId: STRING_IDS.stepSabbaticalTimeName,
        textId: STRING_IDS.stepSabbaticalTimeText,
    },
    //Web dev course
    {
        date: 2022,
        nameId: STRING_IDS.stepBackToEducationName,
        textId: STRING_IDS.stepBackToEducationText,
    },
    //Now
    {
        date: 2023,
        nameId: STRING_IDS.stepInternshipName,
        textId: STRING_IDS.stepInternshipText,
    },
];

export default careerSteps;
