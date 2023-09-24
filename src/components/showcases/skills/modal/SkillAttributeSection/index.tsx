//Imports
import React from "react";
import MasteryBar from "../../MasteryBar";
import { StyledSection, StyledSkillType } from "./style";
import { Skill } from "../../../../../data/content/skills";
import { useText } from "../../../../../utils/hooks";
import { STRING_IDS } from "../../../../../data";

//Types
type SkillAttributeSectionProps = {
    skill: Skill;
};

//Component of the attribute section of a skill's modal
export default function SkillAttributeSection({
    skill,
}: SkillAttributeSectionProps) {
    const { renderText } = useText();

    return (
        <StyledSection>
            <MasteryBar mastery={skill.mastery} />
            <StyledSkillType>
                {renderText(STRING_IDS.hardSkill)}
            </StyledSkillType>
        </StyledSection>
    );
}
