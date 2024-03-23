//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";

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
    return (
        <StyledLine className={className}>
            <p>{`Importance :`}</p>
            <StyledBar filling={(score / highscore) * 100}>
                <div />
            </StyledBar>
        </StyledLine>
    );
}
