//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRINGS } from "../../../../../data";
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
                    introId={STRINGS.dateBegin}
                    date={showcase.dateBegin}
                />
            ) : (
                <>
                    <DateInfoInModal
                        introId={STRINGS.dateStart}
                        date={showcase.dateStart}
                    />
                    <DateInfoInModal
                        introId={STRINGS.dateEnd}
                        date={showcase.dateEnd}
                    />
                </>
            )}
        </StyledSection>
    );
}
