//Imports
import React from "react";
import {
    StyledCard,
    StyledDate,
    StyledSummary,
    StyledThumbnail,
} from "./style";
import { useDate, useText } from "../../../utils/hooks";
import { STRING_IDS } from "../../../data";
import { Skill } from "../../../data/skills/skills";
import MasteryBar from "../MasteryBar";

//Types
type SkillCardProps = {
    skill: Skill;
};

//Component of a work card
export default function SkillCard({ skill }: SkillCardProps) {
    const { formatSimplifiedDate } = useDate();
    const { renderText } = useText();

    const logoAlt = renderText(STRING_IDS.thumbnail);

    return (
        <StyledCard to={`/skill/${skill.id}`}>
            <StyledThumbnail>
                <img src={skill.logo} alt={logoAlt} />
            </StyledThumbnail>
            <StyledSummary>
                <h2>{renderText(skill.nameId)}</h2>
                <StyledDate>
                    <p>{`${renderText(STRING_IDS.since)} ${formatSimplifiedDate(
                        skill.dateBegin
                    )}`}</p>
                </StyledDate>
                <MasteryBar score={skill.mastery} />
            </StyledSummary>
        </StyledCard>
    );
}
