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
        nameId: STRING_IDS.stepMiddleschoolName,
        textId: STRING_IDS.stepMiddleschoolText,
    },
    //1.5 year break
    {
        date: 2020,
        nameId: STRING_IDS.stepMiddleschoolName,
        textId: STRING_IDS.stepMiddleschoolText,
    },
    //Web dev course
    {
        date: 2022,
        nameId: STRING_IDS.stepMiddleschoolName,
        textId: STRING_IDS.stepMiddleschoolText,
    },
    //Now
    {
        date: 2023,
        nameId: STRING_IDS.stepMiddleschoolName,
        textId: STRING_IDS.stepMiddleschoolText,
    },
];

export default careerSteps;
