//Imports
import React from "react";
import { StyledSection } from "./style";
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
                <DateInfoInModal name={`Depuis le`} date={showcase.dateBegin} />
            ) : (
                <>
                    <DateInfoInModal
                        name={`Commencé le`}
                        date={showcase.dateStart}
                    />
                    <DateInfoInModal
                        name={`Terminé le`}
                        date={showcase.dateEnd}
                    />
                </>
            )}
        </StyledSection>
    );
}
