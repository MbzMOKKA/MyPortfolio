//Imports
import React from "react";
import MasteryBar from "../../MasteryBar";
import { StyledSection } from "./style";
import { Skill } from "../../../../../data/content/skills";

//Types
type SkillAttributeSectionProps = {
    skill: Skill;
};

//Component of the attribute section of a skill's modal
export default function SkillAttributeSection({
    skill,
}: SkillAttributeSectionProps) {
    return (
        <StyledSection>
            <MasteryBar mastery={skill.mastery} />
        </StyledSection>
    );
}
