//Imports
import { STRINGS } from "./strings";

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
        nameId: STRINGS.stepMiddleschoolName,
        descriptionId: STRINGS.stepMiddleschoolText,
    },
    //Highschool
    {
        date: 2017,
        nameId: STRINGS.stepHighschoolName,
        descriptionId: STRINGS.stepHighschoolText,
    },
    //1.5 year break
    {
        date: 2020,
        nameId: STRINGS.stepSabbaticalTimeName,
        descriptionId: STRINGS.stepSabbaticalTimeText,
    },
    //Web dev course
    {
        date: 2022,
        nameId: STRINGS.stepBackToEducationName,
        descriptionId: STRINGS.stepBackToEducationText,
    },
    //Now
    {
        date: 2023,
        nameId: STRINGS.stepInternshipName,
        descriptionId: STRINGS.stepInternshipText,
    },
];

export default careerSteps;
