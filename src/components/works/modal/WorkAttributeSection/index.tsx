//Imports
import React from "react";
import { Work } from "../../../../data/works/works";
import { useText } from "../../../../utils/hooks";
import ImportanceBar from "../../ImportanceBar";
import { StyledSection, StyledWorkType } from "./style";
import { getWorkTypeNameId } from "../../../../utils/misc";

//Types
type WorkAttributeSectionProps = {
    work: Work;
    highestImportance: number;
};

//Component of a work's modal
export default function WorkAttributeSection({
    work,
    highestImportance,
}: WorkAttributeSectionProps) {
    const { renderText } = useText();

    return (
        <StyledSection>
            <ImportanceBar
                score={work.importance}
                highscore={highestImportance}
            />
            <StyledWorkType work={work}>
                {renderText(getWorkTypeNameId(work.type))}
            </StyledWorkType>
        </StyledSection>
    );
}
