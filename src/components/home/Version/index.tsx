//Imports
import React from "react";
import { StyledSection } from "./style";
import { formatDate } from "../../../utils/misc";
import { versionNumber, versionReleaseDate } from "../../../data";

//Component of the portfolio's version section
export default function Version() {
    return (
        <StyledSection>
            <p>
                v.{versionNumber} - {formatDate(versionReleaseDate)}
            </p>
        </StyledSection>
    );
}
