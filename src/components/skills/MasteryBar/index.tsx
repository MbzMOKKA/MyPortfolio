//Imports
import React from "react";
import { StyledBar } from "./style";
import { STRING_IDS } from "../../../data";
import { useText } from "../../../utils/hooks";
import { getMasteryStringId } from "../../../utils/misc";

//Types
type MasteryBarProps = {
    score: number;
};

//Component of a work's importance score bar
export default function MasteryBar({ score }: MasteryBarProps) {
    const { renderText } = useText();
    console.log(score);
    return (
        <div>
            <p>{`${renderText(STRING_IDS.mastery)} : ${renderText(
                getMasteryStringId(score)
            )}`}</p>
            <StyledBar filling={score}>
                <div />
            </StyledBar>
        </div>
    );
}
