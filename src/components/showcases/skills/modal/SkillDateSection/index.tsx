//Imports
import React from "react";
import { StyledSection } from "./style";
import { Skill } from "../../../../../data/content/skills";
import { DateInfoInModal } from "../../../common";

//Types
type SkillDateSectionProps = {
    skill: Skill;
};

//Component of the date section of a skill's modal
export default function SkillDateSection({ skill }: SkillDateSectionProps) {
    return (
        <StyledSection>
            <DateInfoInModal name={`Depuis le`} date={skill.dateBegin} />
        </StyledSection>
    );
}
