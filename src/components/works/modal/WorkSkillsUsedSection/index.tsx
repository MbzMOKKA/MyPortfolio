import React from "react";
import { StyledSection } from "./style";
import skills, { Skill } from "../../../../data/skills/skills";
import { useText } from "../../../../utils/hooks";
import { STRING_IDS } from "../../../../data";

//Types
type WorkSkillsUsedSectionProps = {
    skillsId: string[];
};

//Component of the skills used section in a work's modal
export default function WorkSkillsUsedSection({
    skillsId,
}: WorkSkillsUsedSectionProps) {
    const { renderText } = useText();
    const skillsUsed: (Skill | undefined)[] = skillsId.map((skillId: string) =>
        skills.find((skill: Skill) => skill.id === skillId)
    );

    return (
        <StyledSection>
            <p>{renderText(STRING_IDS.skillsUsed)}</p>
            <ul>
                {skillsUsed.map((skillUsed) => {
                    if (!skillUsed) {
                        return null;
                    }
                    const name = renderText(skillUsed.nameId);
                    return (
                        <li>
                            <img src={skillUsed.logo} alt={name} />
                            {name}
                        </li>
                    );
                })}
            </ul>
        </StyledSection>
    );
}
