//Imports
import React from "react";
import { StyledInfo } from "./style";
import { STRING_IDS } from "../../../data";
import { useDate, useText } from "../../../utils/hooks";
import { OngoingBadge } from "../../works";

//Types
type DateInfoProps = {
    introId: string;
    date: string | undefined;
};

//Component of a date info in a work or skill modal
export default function DateInfo({ introId, date }: DateInfoProps) {
    const { renderText } = useText();
    const { formatFullDate } = useDate();

    return (
        <StyledInfo>
            {date === undefined ? (
                <>
                    <p>
                        <strong>{renderText(STRING_IDS.ongoing)}</strong>
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
