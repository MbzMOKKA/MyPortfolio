//Imports
import React from "react";
import { StyledContainer, StyledBubble } from "./style";
import { useText } from "../../../../utils/hooks";

//Types
type CarrerStepProps = {
    date: number;
    nameId: string;
    textId: string;
};

//Component of a career step in the home page
export default function CareerStep(props: CarrerStepProps) {
    const { date, nameId, textId } = props;
    const { renderText } = useText();

    return (
        <StyledContainer>
            <StyledBubble>
                <header>
                    <p>{date}</p>
                    <h2>{renderText(nameId)}</h2>
                </header>
                <main>
                    <p>{renderText(textId)}</p>
                </main>
            </StyledBubble>
        </StyledContainer>
    );
}
