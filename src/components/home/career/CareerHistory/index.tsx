//Imports
import React from "react";
import CareerStepCard from "../CareerStepCard";
import {
    StyledListContainer,
    StyledSection,
    StyledSeparator,
    StyledStepList,
    StyledTimeline,
} from "./style";
import { STRING_IDS, careerSteps } from "../../../../data";
import { useText } from "../../../../utils/hooks";
import { AREA_SEPARATOR_TYPES } from "../../../other/AreaSeparator";

//Component of the career section in the home page
export default function CareerHistory() {
    const { renderComplexText } = useText();

    return (
        <StyledSection>
            <h1>{renderComplexText(STRING_IDS.myCareer)}</h1>
            <StyledListContainer>
                <StyledSeparator type={AREA_SEPARATOR_TYPES.simpleDown} />
                <StyledStepList>
                    <StyledTimeline />
                    {careerSteps.map((step, index) => {
                        return <CareerStepCard key={index} step={step} />;
                    })}
                </StyledStepList>
                <StyledSeparator type={AREA_SEPARATOR_TYPES.simpleUp} />
            </StyledListContainer>
        </StyledSection>
    );
}
