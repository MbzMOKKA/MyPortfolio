//Imports
import React from "react";
import { useDate, useText } from "../../../../../utils/hooks";
import { StyledInfo } from "./style";
import { STRINGS } from "../../../../../data";
import { OngoingBadge } from "../../../works";

//Types
type DateInfoInModalProps = {
    introId: string;
    date: string | undefined;
};

//Component of a date info in a work or skill modal
export default function DateInfoInModal({
    introId,
    date,
}: DateInfoInModalProps) {
    const { renderText } = useText();
    const { formatFullDate } = useDate();

    return (
        <StyledInfo>
            {date === undefined ? (
                <>
                    <p>
                        <strong>{renderText(STRINGS.ongoing)}</strong>
                    </p>
                    <OngoingBadge />
                </>
            ) : (
                <p>
                    {renderText(introId)}
                    <br />
                    <strong>{formatFullDate(date)}</strong>
                </p>
            )}
        </StyledInfo>
    );
}
