//Imports
import React from "react";
import { StyledSection } from "./style";
import { versionNumber, versionReleaseDate } from "../../../data";
import { useDate } from "../../../utils/hooks";

//Component of the portfolio's version section
export default function Version() {
    const { formatFullDate } = useDate();

    return (
        <StyledSection>
            <p>
                v.{versionNumber} - {formatFullDate(versionReleaseDate)}
            </p>
        </StyledSection>
    );
}
