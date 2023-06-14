//Imports
import React, { useEffect, useRef, useState } from "react";
import { useText } from "../../../utils/hooks";
import { StyledBackground, StyledModal } from "./style";
import { Work } from "../../../data/works/works";
import { CloseButton } from "../../other";
import { openUrl, removeUrlEnd } from "../../../utils/misc";
import { Link } from "react-router-dom";

//Types
type WorkModalProps = {
    work: Work | null;
    opened: boolean;
};

//Component of a work's modal
export default function WorkModal({ work, opened }: WorkModalProps) {
    const refCloseLink = useRef<any>(null);
    const [rendered, setRendered] = useState(false);
    const { renderText } = useText();

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
                        {renderText(work.nameId)}
                        <CloseButton
                            onClick={() => {
                                refCloseLink.current.click();
                            }}
                        />
                    </header>
                    <main>123</main>
                </StyledModal>
            </StyledBackground>
        </>
    );
}
