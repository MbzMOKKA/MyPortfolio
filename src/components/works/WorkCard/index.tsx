//Imports
import React from "react";
import {
    StyledCard,
    StyledDate,
    StyledSummary,
    StyledThumbnail,
} from "./style";
import { Work } from "../../../data/content/works";
import { useDate, useText } from "../../../utils/hooks";
import { STRING_IDS } from "../../../data";
import { ImportanceBar, OngoingBadge } from "..";

//Types
type WorkCardProps = {
    work: Work;
    highestImportance: number;
};

//Component of a work card
export default function WorkCard({ work, highestImportance }: WorkCardProps) {
    const { formatSimplifiedDate } = useDate();
    const { renderText } = useText();

    const thumbnailAlt = renderText(STRING_IDS.thumbnail);

    return (
        <StyledCard to={`/work/${work.id}`}>
            <StyledThumbnail work={work}>
                <img src={work.thumbnail} alt={thumbnailAlt} />
            </StyledThumbnail>
            <StyledSummary>
                <h2>{renderText(work.nameId)}</h2>
                <StyledDate>
                    <p>
                        {`${formatSimplifiedDate(
                            work.dateStart
                        )} - ${formatSimplifiedDate(work.dateEnd)}`}
                    </p>
                    {work.dateEnd === undefined ? <OngoingBadge /> : null}
                </StyledDate>
                <ImportanceBar
                    score={work.importance}
                    highscore={highestImportance}
                />
            </StyledSummary>
        </StyledCard>
    );
}
