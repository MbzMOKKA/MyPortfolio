//Imports
import React from "react";
import { useDate } from "../../../../../utils/hooks";
import { StyledInfo } from "./style";
import { OngoingBadge } from "../../../works";

//Types
type DateInfoInModalProps = {
    name: string;
    date: string | undefined;
};

//Component of a date info in a work or skill modal
export default function DateInfoInModal({ name, date }: DateInfoInModalProps) {
    const { formatFullDate } = useDate();

    return (
        <StyledInfo>
            {date === undefined ? (
                <>
                    <p>
                        <strong>{`En cours`}</strong>
                    </p>
                    <OngoingBadge />
                </>
            ) : (
                <p>
                    {name}
                    <br />
                    <strong>{formatFullDate(date)}</strong>
                </p>
            )}
        </StyledInfo>
    );
}
