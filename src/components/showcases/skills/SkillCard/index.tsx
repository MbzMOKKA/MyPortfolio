//Imports
import React from "react";
import { Skill } from "../../../../data/content/skills";
import { useDate } from "../../../../utils/hooks";
import { DateInfoInCard, ShowcaseCard } from "../../common";
import MasteryBar from "../MasteryBar";

//Types
type WorkCardProps = {
    skill: Skill;
};

//Component of a work's card
export default function WorkCard({ skill }: WorkCardProps) {
    const { formatSimplifiedDate } = useDate();

    return (
        <ShowcaseCard showcase={skill} listPageRoute={`/skill`}>
            <DateInfoInCard>
                <p>{`Depuis ${formatSimplifiedDate(skill.dateBegin)}`}</p>
            </DateInfoInCard>
            <MasteryBar mastery={skill.mastery} />
        </ShowcaseCard>
    );
}
