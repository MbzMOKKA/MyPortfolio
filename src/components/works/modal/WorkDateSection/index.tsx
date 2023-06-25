//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../../data";
import { DateInfo } from "../../../other";
import { Work } from "../../../../data/content/works";

//Types
type WorkDateSectionProps = {
    work: Work;
};

//Component of the date section of a work's modal
export default function WorkDateSection({ work }: WorkDateSectionProps) {
    return (
        <StyledSection>
            <DateInfo introId={STRING_IDS.dateStart} date={work.dateStart} />
            <DateInfo introId={STRING_IDS.dateEnd} date={work.dateEnd} />
        </StyledSection>
    );
}
