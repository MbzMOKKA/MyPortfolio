//Imports
import React from "react";
import { StyledDescription } from "./style";
import { Work } from "../../../../../data/content/works";
import { renderComplexText } from "../../../../../utils/misc";

//Types
type ShowcaseDescriptionProps = {
    showcase: Work;
};

//Component of a showcase's description in its modal
export default function ShowcaseDescription({
    showcase,
}: ShowcaseDescriptionProps) {
    return (
        <StyledDescription>
            {renderComplexText(showcase.description)}
        </StyledDescription>
    );
}
