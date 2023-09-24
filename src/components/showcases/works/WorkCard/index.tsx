//Imports
import React from "react";
import { Work } from "../../../../data/content/works";
import { useDate } from "../../../../utils/hooks";
import { ImportanceBar, OngoingBadge } from "..";
import { DateInfoInCard, ShowcaseCard } from "../../common";

//Types
type WorkCardProps = {
    work: Work;
    highestImportance: number;
};

//Component of a work's card
export default function WorkCard({ work, highestImportance }: WorkCardProps) {
    const { formatSimplifiedDate } = useDate();
    const dateStart = formatSimplifiedDate(work.dateStart);
    const dateEnd = formatSimplifiedDate(work.dateEnd);
    const dates =
        dateStart === dateEnd ? dateStart : `${dateStart} - ${dateEnd}`;

    return (
        <ShowcaseCard showcase={work} listPageRoute={`/work`}>
            <DateInfoInCard>
                <p>{dates}</p>
                {work.dateEnd === undefined ? <OngoingBadge /> : null}
            </DateInfoInCard>
            <ImportanceBar
                score={work.importance}
                highscore={highestImportance}
            />
        </ShowcaseCard>
    );
}
