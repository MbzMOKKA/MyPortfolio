//Imports
import React, { useState } from "react";
import { ShowcasePage } from "../../components/showcases/common";
import skills, { Skill } from "../../data/content/skills";
import { useParams } from "react-router-dom";
import { SkillCard, SkillModal } from "../../components/showcases/skills";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";

//Component of the skill page
export default function SkillPage() {
    const { id } = useParams();
    const { renderText } = useText();
    const [skillSelected, setSkillSelected] = useState<Skill | null>(null);

    const shownSkills = skills.slice();
    shownSkills.sort((a, b) => {
        return b.dateBegin.localeCompare(a.dateBegin);
    });
    let skillGotSelected = false;
    for (const skill of shownSkills) {
        if (skill.id === id) {
            skillGotSelected = true;
            if (skillSelected !== skill) {
                setSkillSelected(skill);
            }
        }
    }

    const statText = `${shownSkills.length} ${renderText(
        STRING_IDS.totalSkills
    ).toLowerCase()}`;

    function card(skill: Skill, index: number) {
        return <SkillCard key={index} skill={skill} />;
    }
    const modal = (
        <SkillModal skill={skillSelected} opened={id !== undefined} />
    );

    return (
        <ShowcasePage
            id={id}
            shownShowcases={shownSkills}
            card={card}
            modal={modal}
            showcaseGotSelected={skillGotSelected}
            statText={statText}
        />
    );
}
