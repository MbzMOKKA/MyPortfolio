//Imports
import React from "react";
import {
    StyledMain,
    StyledTopSection,
    StyledList,
    StyledActions,
    StyledStats,
    StyledResultCount,
} from "./style";
import { WorkCard } from "../../components/works";
import { useParams } from "react-router-dom";
import { AreaSeparator } from "../../components/other";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";
import works from "../../data/works/works";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";

//Component of the works page
export default function WorksPage() {
    const { t } = useText();
    const { id } = useParams();
    const highestImportance = Math.max(...works.map((work) => work.importance));

    return (
        <StyledMain>
            <StyledTopSection>
                <StyledActions>
                    <button>{t(STRING_IDS.filter)}</button>
                    {/* <button>{t(STRING_IDS.sort)}</button> */}
                </StyledActions>
                <StyledStats>{`14 ${t(
                    STRING_IDS.totalWorks
                ).toLowerCase()} · 3 ${t(
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
                            id={index}
                            work={work}
                            highestImportance={highestImportance}
                        />
                    );
                })}
            </StyledList>
        </StyledMain>
    );
}
