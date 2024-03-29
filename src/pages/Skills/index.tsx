//Imports
import React, { useState } from "react";
import { ShowcasePage } from "../../components/showcases/common";
import skills, { Skill } from "../../data/content/skills";
import { useParams } from "react-router-dom";
import { SkillCard, SkillModal } from "../../components/showcases/skills";
import { StyledShowcaseType } from "./style";
import { NaturalFlowCTA } from "../../components/other";

//Component of the skill page
export default function SkillPage() {
    const { id } = useParams();
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

    const statText = (
        <>
            {shownSkills.length}{" "}
            <StyledShowcaseType>compétences</StyledShowcaseType>
        </>
    );

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
            naturalFlowCTA={
                <NaturalFlowCTA url="/contact" text="Me contacter" />
            }
        />
    );
}
