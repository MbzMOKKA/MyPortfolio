import React from "react";
import { StyledSection } from "./style";
import skills, { Skill } from "../../../../../data/content/skills";

//Types
type WorkSkillsUsedSectionProps = {
    skillsId: string[];
};

//Component of the skills used section in a work's modal
export default function WorkSkillsUsedSection({
    skillsId,
}: WorkSkillsUsedSectionProps) {
    if (skillsId.length <= 0) {
        return null;
    }

    const skillsUsed: (Skill | undefined)[] = skillsId.map((skillId: string) =>
        skills.find((skill: Skill) => skill.id === skillId)
    );

    return (
        <StyledSection>
            <h2>{`Compétence(s) utilisée(s)`}</h2>
            <ul>
                {skillsUsed.map((skillUsed, index) => {
                    if (!skillUsed) {
                        return null;
                    }
                    return (
                        <li key={index}>
                            <img
                                src={skillUsed.logo}
                                alt={skillUsed.name}
                                draggable={false}
                            />
                            {skillUsed.name}
                        </li>
                    );
                })}
            </ul>
        </StyledSection>
    );
}
