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
import { careerSteps } from "../../../../data";
import { useText } from "../../../../utils/hooks";
import { AREA_SEPARATOR_TYPES } from "../../../other/AreaSeparator";
import { STRINGS } from "../../../../data/content/strings";

//Component of the career section in the home page
export default function CareerHistory() {
    const { renderComplexText } = useText();

    return (
        <StyledSection>
            <h1>{renderComplexText(STRINGS.myCareer)}</h1>
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
