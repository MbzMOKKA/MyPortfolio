//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";
import { STRING_IDS } from "../../../data";
import { useText } from "../../../utils/hooks";

//Types
type MasteryBarProps = {
    score: number;
};

//Component of a work's importance score bar
export default function MasteryBar({ score }: MasteryBarProps) {
    const { renderText } = useText();

    return (
        <StyledLine>
            <p>{`${renderText(STRING_IDS.mastery)} : ${score}`}</p>
            <StyledBar filling={score}>
                <div />
            </StyledBar>
        </StyledLine>
    );
}
