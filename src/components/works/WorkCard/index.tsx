//Imports
import React from "react";
import {
    StyledCard,
    StyledDate,
    StyledSummary,
    StyledThumbnail,
} from "./style";
import { Work } from "../../../data/works/works";
import { heavyDevCup } from "../../../assets/images";
import { useText } from "../../../utils/hooks";
import { formatSimplifiedDate } from "../../../utils/misc";
import { STRING_IDS } from "../../../data";
import { ImportanceBar, OngoingBadge } from "..";

//Types
type WorkCardProps = {
    id: number;
    work: Work;
    highestImportance: number;
};

//Component of a work card
export default function WorkCard({
    id,
    work,
    highestImportance,
}: WorkCardProps) {
    const { renderText, t } = useText();

    const thumbnailAlt = t(STRING_IDS.thumbnail);

    return (
        <StyledCard to={`/work/${id}`}>
            <StyledThumbnail>
                <img src={heavyDevCup} alt={thumbnailAlt} />
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
                    filling={(work.importance / highestImportance) * 100}
                />
            </StyledSummary>
        </StyledCard>
    );
}
