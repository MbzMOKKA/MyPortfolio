//Imports
import React from "react";
import { Skill } from "../../../../data/content/skills";
import { useDate, useText } from "../../../../utils/hooks";
import { DateInfoInCard, ShowcaseCard } from "../../common";
import MasteryBar from "../MasteryBar";
import { STRINGS } from "../../../../data";

//Types
type WorkCardProps = {
    skill: Skill;
};

//Component of a work's card
export default function WorkCard({ skill }: WorkCardProps) {
    const { renderText } = useText();
    const { formatSimplifiedDate } = useDate();

    return (
        <ShowcaseCard showcase={skill} listPageRoute={`/skill`}>
            <DateInfoInCard>
                <p>{`${renderText(STRINGS.since)} ${formatSimplifiedDate(
                    skill.dateBegin
                )}`}</p>
            </DateInfoInCard>
            <MasteryBar mastery={skill.mastery} />
        </ShowcaseCard>
    );
}
