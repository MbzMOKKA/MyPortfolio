//Imports
import React, { useEffect, useRef, useState } from "react";
import { Work } from "../../../../data/works/works";
import { useText } from "../../../../utils/hooks";
import { Link } from "react-router-dom";
import { CloseButton } from "../../../other";
import {
    WorkAttributeSection,
    WorkDateSection,
    WorkSkillsUsedSection,
} from "../..";
import { StyledBackground, StyledModal, StyledDescription } from "./style";

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
    const refCloseLink = useRef<any>(null);
    const [rendered, setRendered] = useState(false);
    const { renderComplexText } = useText();

    useEffect(() => {
        if (opened) {
            setRendered(true);
        }
    }, [opened]);

    if (!work || !rendered) {
        return null;
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
                        <WorkAttributeSection
                            work={work}
                            highestImportance={highestImportance}
                        />
                        <WorkDateSection work={work} />
                        <StyledDescription>
                            {renderComplexText(work.descriptionId)}
                        </StyledDescription>
                        <WorkSkillsUsedSection skillsId={work.skillsUsed} />
                    </main>
                </StyledModal>
            </StyledBackground>
        </>
    );
}
