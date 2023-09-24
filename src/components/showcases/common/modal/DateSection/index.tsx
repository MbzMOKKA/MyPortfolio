//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../../../data";
import { DateInfoInModal } from "../..";

//Types
type DateSectionProps = {
    showcase: any;
};

//Component of the date section of a showcase's modal
export default function DateSection({ showcase }: DateSectionProps) {
    const dates = showcase.dateBegin ? 1 : 2;

    return (
        <StyledSection dates={dates}>
            {dates === 1 ? (
                <DateInfoInModal
                    introId={STRING_IDS.dateBegin}
                    date={showcase.dateBegin}
                />
            ) : (
                <>
                    <DateInfoInModal
                        introId={STRING_IDS.dateStart}
                        date={showcase.dateStart}
                    />
                    <DateInfoInModal
                        introId={STRING_IDS.dateEnd}
                        date={showcase.dateEnd}
                    />
                </>
            )}
        </StyledSection>
    );
}
