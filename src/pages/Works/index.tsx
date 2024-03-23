//Imports
import React, { useState } from "react";
import { ShowcasePage } from "../../components/showcases/common";
import works, { Work } from "../../data/content/works";
import { useParams } from "react-router-dom";
import { WorkCard, WorkModal } from "../../components/showcases/works";
import { StyledOnGoingCount, StyledShowcaseType } from "./style";
import { NaturalFlowCTA } from "../../components/other";

//Component of the work page
export default function WorkPage() {
    const { id } = useParams();
    const [workSelected, setWorkSelected] = useState<Work | null>(null);

    const shownWorks = works.slice();
    shownWorks.sort((a, b) => {
        return b.dateStart.localeCompare(a.dateStart);
    });
    let highestImportance = 0;
    let ongoings = 0;
    let workGotSelected = false;

    for (const work of shownWorks) {
        if (work.importance > highestImportance) {
            highestImportance = work.importance;
        }
        if (work.dateEnd === undefined) {
            ongoings++;
        }
        if (work.id === id) {
            workGotSelected = true;
            if (workSelected !== work) {
                setWorkSelected(work);
            }
        }
    }

    const statText = (
        <>
            {shownWorks.length} <StyledShowcaseType>travaux</StyledShowcaseType>{" "}
            <StyledOnGoingCount>
                {`( ${ongoings} en cours )`}
            </StyledOnGoingCount>
        </>
    );

    function card(work: Work, index: number) {
        return (
            <WorkCard
                key={index}
                work={work}
                highestImportance={highestImportance}
            />
        );
    }
    const modal = (
        <WorkModal
            work={workSelected}
            highestImportance={highestImportance}
            opened={id !== undefined}
        />
    );

    return (
        <ShowcasePage
            id={id}
            shownShowcases={shownWorks}
            card={card}
            modal={modal}
            showcaseGotSelected={workGotSelected}
            statText={statText}
            naturalFlowCTA={
                <NaturalFlowCTA url="/skill" text="Voir mes compétences" />
            }
        />
    );
}
