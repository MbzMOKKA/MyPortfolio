//Imports
import React from "react";
import CareerStep from "../CareerStep";
import { StyledSection, StyledStepList, StyledTimeline } from "./style";
import { useTranslation } from "react-i18next";
import { STRING_IDS, careerSteps } from "../../../../data";

//Component of the career section in the home page
export default function CareerHistory() {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <h1>{t(STRING_IDS.myCareer)}</h1>
            <StyledStepList>
                <StyledTimeline />
                {careerSteps.map((step, index) => {
                    return (
                        <CareerStep
                            key={index}
                            date={step.date}
                            nameId={step.nameId}
                            textId={step.textId}
                        />
                    );
                })}
            </StyledStepList>
        </StyledSection>
    );
}
