//Imports
import React from "react";
import { StyledType } from "./style";
import { useText } from "../../../../../utils/hooks";
import { Skill } from "../../../../../data/content/skills";
import { Work } from "../../../../../data/content/works";
import { getShowcaseTypeNameId } from "../../../../../utils/misc";

//Types
type ShowcaseTypeProps = {
    showcase: Work | Skill;
};

//Component of a showcase's type in its modal
export default function ShowcaseType({ showcase }: ShowcaseTypeProps) {
    const { renderText } = useText();

    return (
        <StyledType type={showcase.type}>
            {renderText(getShowcaseTypeNameId(showcase.type))}
        </StyledType>
    );
}
