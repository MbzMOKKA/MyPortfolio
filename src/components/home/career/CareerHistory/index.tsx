//Imports
import React from "react";
import CareerStep from "../CareerStep";
import { StyledSection, StyledStepList, StyledTimeline } from "./style";
import { useTranslation } from "react-i18next";
import { STRING_IDS } from "../../../../data";

//Component of the career section in the home page
export default function CareerHistory() {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <h1>{t(STRING_IDS.myCareer)}</h1>
            <StyledStepList>
                <StyledTimeline />
                <CareerStep />
                <CareerStep />
                <CareerStep />
                <CareerStep />
                <CareerStep />
            </StyledStepList>
        </StyledSection>
    );
}
