//Imports
import React, { useState } from "react";
import { ShowcasePage } from "../../components/showcases/common";
import works, { Work } from "../../data/content/works";
import { useParams } from "react-router-dom";
import { WorkCard, WorkModal } from "../../components/showcases/works";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";

//Component of the work page
export default function WorkPage() {
    const { id } = useParams();
    const { renderText } = useText();
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

    const statText = `${shownWorks.length} ${renderText(
        STRING_IDS.totalWorks
    ).toLowerCase()} (${ongoings} ${renderText(
        STRING_IDS.ongoing
    ).toLowerCase()})`;

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
        />
    );
}
