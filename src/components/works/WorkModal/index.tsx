//Imports
import React, { useEffect, useRef, useState } from "react";
import { useDate, useText } from "../../../utils/hooks";
import {
    StyledBackground,
    StyledAttributesSection,
    StyledModal,
    StyledWorkType,
    StyledDateSection,
    StyledDescription,
} from "./style";
import { Work } from "../../../data/works/works";
import { CloseButton } from "../../other";
import { getWorkTypeNameId } from "../../../utils/misc";
import { Link } from "react-router-dom";
import { STRING_IDS } from "../../../data";
import ImportanceBar from "../ImportanceBar";

//Types
type WorkModalProps = {
    work: Work | null;
    opened: boolean;
    highestImportance: number;
};

//Component of a work's modal
export default function WorkModal({
    work,
    opened,
    highestImportance,
}: WorkModalProps) {
    const { formatFullDate } = useDate();
    const refCloseLink = useRef<any>(null);
    const [rendered, setRendered] = useState(false);
    const { renderText, renderComplexText } = useText();

    useEffect(() => {
        if (opened) {
            setRendered(true);
        }
    }, [opened]);

    if (!work || !rendered) {
        return null;
    }

    function renderDateInfo(beginingId: string, date: string | undefined) {
        if (date === undefined) {
            return renderText(STRING_IDS.ongoing);
        }
        return renderText(beginingId) + " " + formatFullDate(date);
    }

    return (
        <>
            <Link to={`/work`} ref={refCloseLink} />
            <StyledBackground
                className={`${opened ? "shown" : "hidden"}`}
                onAnimationEnd={(e) => {
                    if (e.animationName === "modalBgDisappear") {
                        setRendered(false);
                    }
                }}
            >
                <StyledModal className={`${opened ? "shown" : "hidden"}`}>
                    <header>
                        <img src={work.thumbnail} alt={work.nameId} />
                        <h1>{renderComplexText(work.nameId)}</h1>
                        <CloseButton
                            onClick={() => {
                                refCloseLink.current.click();
                            }}
                        />
                    </header>
                    <main>
                        <StyledAttributesSection>
                            <ImportanceBar
                                score={work.importance}
                                highscore={highestImportance}
                            />
                            <StyledWorkType work={work}>
                                {renderText(getWorkTypeNameId(work.type))}
                            </StyledWorkType>
                        </StyledAttributesSection>
                        <StyledDateSection>
                            <p>
                                {`· ${renderDateInfo(
                                    STRING_IDS.dateStart,
                                    work.dateStart
                                )}`}
                            </p>
                            <p>
                                {`· ${renderDateInfo(
                                    STRING_IDS.dateEnd,
                                    work.dateEnd
                                )}`}
                            </p>
                        </StyledDateSection>
                        <StyledDescription>
                            {renderComplexText(work.descriptionId)}
                        </StyledDescription>
                        <p>{work.skillsUsed}</p>
                    </main>
                </StyledModal>
            </StyledBackground>
        </>
    );
}
