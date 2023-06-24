//Imports
import React, { useState } from "react";
import { StyledMain, StyledTopSection, StyledList, StyledStats } from "./style";
import { useParams } from "react-router-dom";
import { AreaSeparator, ScrollToTopButton } from "../../components/other";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";
import skills, { Skill } from "../../data/skills/skills";
import { SkillCard } from "../../components/skills";

//Component of the skills page
export default function SkillsPage() {
    const [skillSelected, setSkillSelected] = useState<Skill | null>(null);
    const { renderText } = useText();
    const { id } = useParams();

    for (const skill of skills) {
        if (skill.id === id && skillSelected !== skill) {
            setSkillSelected(skill);
        }
    }

    return (
        <>
            {/* <SkillModal skill={skillSelected} opened={id !== undefined} /> */}
            <StyledMain>
                <StyledTopSection>
                    <StyledStats>{`${skills.length} ${renderText(
                        STRING_IDS.totalSkills
                    ).toLowerCase()}`}</StyledStats>
                </StyledTopSection>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.simpleDown} />
                <StyledList>
                    {skills.map((skill, index) => {
                        return <SkillCard key={index} skill={skill} />;
                    })}
                </StyledList>
                <ScrollToTopButton />
            </StyledMain>
        </>
    );
}
