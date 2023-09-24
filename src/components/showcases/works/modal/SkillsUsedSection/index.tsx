import React from "react";
import { StyledSection } from "./style";
import skills, { Skill } from "../../../../../data/content/skills";
import { useText } from "../../../../../utils/hooks";
import { STRING_IDS } from "../../../../../data";

//Types
type WorkSkillsUsedSectionProps = {
    skillsId: string[];
};

//Component of the skills used section in a work's modal
export default function WorkSkillsUsedSection({
    skillsId,
}: WorkSkillsUsedSectionProps) {
    const { renderText } = useText();
    if (skillsId.length <= 0) {
        return null;
    }

    const skillsUsed: (Skill | undefined)[] = skillsId.map((skillId: string) =>
        skills.find((skill: Skill) => skill.id === skillId)
    );

    return (
        <StyledSection>
            <h2>
                {renderText(
                    skillsUsed.length > 1
                        ? STRING_IDS.skillsUsed
                        : STRING_IDS.skillUsed
                )}
            </h2>
            <ul>
                {skillsUsed.map((skillUsed, index) => {
                    if (!skillUsed) {
                        return null;
                    }
                    const name = renderText(skillUsed.nameId);
                    return (
                        <li key={index}>
                            <img
                                src={skillUsed.logo}
                                alt={name}
                                draggable={false}
                            />
                            {name}
                            {/* <Link to={`/skill/${skillUsed.id}`}>
                                <img src={skillUsed.logo} alt={name} />
                                {name}
                            </Link> */}
                        </li>
                    );
                })}
            </ul>
        </StyledSection>
    );
}
