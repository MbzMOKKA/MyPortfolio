//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";
import { STRINGS } from "../../../../data";
import { useText } from "../../../../utils/hooks";

//Types
type ImportanceBarProps = {
    score: number;
    highscore: number;
    className?: string;
};

//Component of a work's importance score bar
export default function ImportanceBar({
    score,
    highscore,
    className,
}: ImportanceBarProps) {
    const { renderText } = useText();

    return (
        <StyledLine className={className}>
            <p>{`${renderText(STRINGS.importance)} :` /*${score}*/}</p>
            <StyledBar filling={(score / highscore) * 100}>
                <div />
            </StyledBar>
        </StyledLine>
    );
}
