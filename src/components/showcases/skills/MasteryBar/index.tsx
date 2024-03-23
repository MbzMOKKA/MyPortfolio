//Imports
import React from "react";
import { getMasteryLevelName } from "../../../../utils/misc";
import { MasteryLevel } from "../../../../data/content/skills";
import { StyledMastery } from "./style";

//Types
type MasteryBarProps = {
    mastery: MasteryLevel;
    className?: string;
};

//Component of a work's importance score bar
export default function MasteryBar({ mastery, className }: MasteryBarProps) {
    return (
        <StyledMastery className={className}>
            <p>
                {`Maitrise : `}
                <span>{`${getMasteryLevelName(mastery)}`}</span>
            </p>
        </StyledMastery>
    );
}
