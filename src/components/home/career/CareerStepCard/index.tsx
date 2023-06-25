//Imports
import React from "react";
import { StyledContainer, StyledBubble } from "./style";
import { useText } from "../../../../utils/hooks";
import { CareerStep } from "../../../../data/content/careerSteps";

//Types
type CareerStepProps = {
    step: CareerStep;
};

//Component of a career step in the home page
export default function CareerStepCard({ step }: CareerStepProps) {
    const { renderComplexText } = useText();

    return (
        <StyledContainer>
            <StyledBubble>
                <header>
                    <p>{step.date}</p>
                    <h2>{renderComplexText(step.nameId)}</h2>
                </header>
                <main>
                    <p>{renderComplexText(step.descriptionId)}</p>
                </main>
            </StyledBubble>
        </StyledContainer>
    );
}
