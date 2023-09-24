//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../../../data";
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
            <DateInfoInModal
                introId={STRING_IDS.dateBegin}
                date={skill.dateBegin}
            />
        </StyledSection>
    );
}
