//Imports
import React, { useState } from "react";
import {
    StyledMain,
    StyledTopSection,
    StyledList,
    //StyledActions,
    StyledStats,
} from "./style";
import { WorkCard, WorkModal } from "../../components/works";
import { useParams } from "react-router-dom";
import { AreaSeparator, ScrollToTopButton } from "../../components/other";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";
import works, { Work } from "../../data/content/works";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";

//Component of the works page
export default function WorksPage() {
    const [workSelected, setWorkSelected] = useState<Work | null>(null);
    const { renderText } = useText();
    const { id } = useParams();

    let highestImportance = 0;
    let ongoings = 0;
    for (const work of works) {
        if (work.importance > highestImportance) {
            highestImportance = work.importance;
        }
        if (work.dateEnd === undefined) {
            ongoings++;
        }
        if (work.id === id && workSelected !== work) {
            setWorkSelected(work);
        }
    }

    return (
        <>
            <WorkModal
                work={workSelected}
                highestImportance={highestImportance}
                opened={id !== undefined}
            />
            <StyledMain>
                <StyledTopSection>
                    {/* <StyledActions>
                        <button>{renderText(STRING_IDS.filter)}</button>
                        <button>{renderText(STRING_IDS.sort)}</button>
                    </StyledActions> */}
                    <StyledStats>{`${works.length} ${renderText(
                        STRING_IDS.totalWorks
                    ).toLowerCase()} (${ongoings} ${renderText(
                        STRING_IDS.ongoing
                    ).toLowerCase()})`}</StyledStats>
                </StyledTopSection>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.simpleDown} />
                {/* <StyledResultCount>
            {`6 ${renderText(
                works.length > 1
                    ? STRING_IDS.searchResults
                    : STRING_IDS.searchResult
            ).toLowerCase()}`}
        </StyledResultCount> */}
                <StyledList>
                    {works.map((work, index) => {
                        return (
                            <WorkCard
                                key={index}
                                work={work}
                                highestImportance={highestImportance}
                            />
                        );
                    })}
                </StyledList>
                <ScrollToTopButton />
            </StyledMain>
        </>
    );
}
