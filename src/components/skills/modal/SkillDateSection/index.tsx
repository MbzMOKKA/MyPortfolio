//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../../data";
import { DateInfo } from "../../../other";
import { Skill } from "../../../../data/content/skills";

//Types
type SkillDateSectionProps = {
    skill: Skill;
};

//Component of the date section of a skill's modal
export default function SkillDateSection({ skill }: SkillDateSectionProps) {
    return (
        <StyledSection>
            <DateInfo introId={STRING_IDS.dateBegin} date={skill.dateBegin} />
        </StyledSection>
    );
}
