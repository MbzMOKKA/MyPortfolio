//Imports
import React from "react";
import { StyledContainer, StyledBubble } from "./style";
import { CareerStep } from "../../../../data/content/careerSteps";
import { renderComplexText } from "../../../../utils/misc";

//Types
type CareerStepProps = {
    step: CareerStep;
};

//Component of a career step in the home page
export default function CareerStepCard({ step }: CareerStepProps) {
    return (
        <StyledContainer>
            <StyledBubble>
                <header>
                    <p>{step.date}</p>
                    <h2>{step.name}</h2>
                </header>
                <main>
                    <p>{renderComplexText(step.description)}</p>
                </main>
            </StyledBubble>
        </StyledContainer>
    );
}
