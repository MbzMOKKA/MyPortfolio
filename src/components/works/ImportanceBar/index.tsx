//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";
import { STRING_IDS } from "../../../data";
import { useText } from "../../../utils/hooks";

//Types
type ImportanceBarProps = {
    score: number;
    filling: number;
};

//Component of a work's importance score bar
export default function ImportanceBar({ score, filling }: ImportanceBarProps) {
    const { t } = useText();

    return (
        <StyledLine>
            <p>{`${t(STRING_IDS.importance)} : ${score}`}</p>
            <StyledBar filling={filling}>
                <div />
            </StyledBar>
        </StyledLine>
    );
}
