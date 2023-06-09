//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";
import { STRING_IDS } from "../../../data";
import { useText } from "../../../utils/hooks";

//Types
type ImportanceBarProps = {
    score: number;
    highscore: number;
};

//Component of a work's importance score bar
export default function ImportanceBar({
    score,
    highscore,
}: ImportanceBarProps) {
    const { renderText } = useText();

    return (
        <StyledLine>
            <p>{`${renderText(STRING_IDS.importance)} : ${score}`}</p>
            <StyledBar filling={(score / highscore) * 100}>
                <div />
            </StyledBar>
        </StyledLine>
    );
}
