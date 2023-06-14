//Imports
import React, { useState } from "react";
import {
    StyledMain,
    StyledTopSection,
    StyledList,
    StyledActions,
    StyledStats,
} from "./style";
import { WorkCard, WorkModal } from "../../components/works";
import { useParams } from "react-router-dom";
import { AreaSeparator } from "../../components/other";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";
import works, { Work } from "../../data/works/works";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";

//Component of the works page
export default function WorksPage() {
    const [workSelected, setWorkSelected] = useState<Work | null>(null);
    const { t } = useText();
    const { urlName } = useParams();

    let highestImportance = 0;
    let ongoings = 0;
    for (const work of works) {
        if (work.importance > highestImportance) {
            highestImportance = work.importance;
        }
        if (work.dateEnd === undefined) {
            ongoings++;
        }
        if (work.urlName === urlName && workSelected !== work) {
            setWorkSelected(work);
        }
    }

    return (
        <>
            <WorkModal work={workSelected} opened={urlName !== undefined} />
            <StyledMain>
                <StyledTopSection>
                    <StyledActions>
                        <button>{t(STRING_IDS.filter)}</button>
                        {/* <button>{t(STRING_IDS.sort)}</button> */}
                    </StyledActions>
                    <StyledStats>{`${works.length} ${t(
                        STRING_IDS.totalWorks
                    ).toLowerCase()} · ${ongoings} ${t(
                        STRING_IDS.ongoing
                    ).toLowerCase()}`}</StyledStats>
                </StyledTopSection>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.simpleDown} />
                {/* <StyledResultCount>
            {`6 ${t(
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
            </StyledMain>
        </>
    );
}
