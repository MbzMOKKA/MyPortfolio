//Imports
import React from "react";
import { StyledDescription } from "./style";
import { useText } from "../../../../../utils/hooks";
import { Skill } from "../../../../../data/content/skills";
import { Work } from "../../../../../data/content/works";

//Types
type ShowcaseDescriptionProps = {
    showcase: Work | Skill;
};

//Component of a showcase's description in its modal
export default function ShowcaseDescription({
    showcase,
}: ShowcaseDescriptionProps) {
    const { renderComplexText } = useText();

    return (
        <StyledDescription>
            {renderComplexText(showcase.descriptionId)}
        </StyledDescription>
    );
}
