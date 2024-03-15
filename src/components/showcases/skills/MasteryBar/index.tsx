//Imports
import React from "react";
import { STRING_IDS } from "../../../../data";
import { useText } from "../../../../utils/hooks";
import { getMasteryStringId } from "../../../../utils/misc";
import { MasteryLevel } from "../../../../data/content/skills";
import { StyledMastery } from "./style";

//Types
type MasteryBarProps = {
    mastery: MasteryLevel;
    className?: string;
};

//Component of a work's importance score bar
export default function MasteryBar({ mastery, className }: MasteryBarProps) {
    const { renderText } = useText();

    return (
        <StyledMastery className={className}>
            <p>
                {`${renderText(STRING_IDS.mastery)} : `}
                <span>{`${renderText(getMasteryStringId(mastery))}`}</span>
            </p>
        </StyledMastery>
    );
}
