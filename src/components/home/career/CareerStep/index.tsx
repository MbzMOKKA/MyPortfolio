//Imports
import React from "react";
import { StyledContainer, StyledBubble } from "./style";
import { useTranslation } from "react-i18next";

//Types
type CarrerStepProps = {
    date: number;
    nameId: string;
    textId: string;
};

//Component of a career step in the home page
export default function CareerStep(props: CarrerStepProps) {
    const { date, nameId, textId } = props;
    const { t } = useTranslation();

    function renderText(stringWithNewLines: string) {
        const newText = stringWithNewLines
            .split("\n")
            .map((str, index, arr) => (
                <React.Fragment key={index}>
                    {str}
                    {index !== arr.length - 1 && <br />}
                </React.Fragment>
            ));
        return newText;
    }

    return (
        <StyledContainer>
            <StyledBubble>
                <header>
                    <p>{date}</p>
                    <h2>{renderText(t(nameId))}</h2>
                </header>
                <main>
                    <p>{renderText(t(textId))}</p>
                </main>
            </StyledBubble>
        </StyledContainer>
    );
}
