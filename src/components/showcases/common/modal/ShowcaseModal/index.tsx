import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectScreenType } from "../../../../../redux_toolkit";
import { Link } from "react-router-dom";
import React from "react";
import { StyledBackground, StyledModal } from "./style";
import { CloseButton } from "../../../../other";
import { SCREEN_TYPES } from "../../../../../redux_toolkit/miscSlice";

//Types
type WorkModalProps = {
    opened: boolean;
    listPageRoute: string;
    smallScreenHeader: ReactNode;
    smallScreenMain: ReactNode;
    largeScreenHeader: ReactElement;
    largeScreenMain: ReactElement;
};

//Component of a showcase's modal
export default function ShowcaseModal({
    opened,
    listPageRoute,
    smallScreenHeader,
    smallScreenMain,
    largeScreenHeader,
    largeScreenMain,
}: WorkModalProps) {
    const refCloseLink = useRef<any>(null);
    const [rendered, setRendered] = useState(false);
    const screenType = useSelector(selectScreenType);

    useEffect(() => {
        if (opened) {
            setRendered(true);
        }
    }, [opened]);

    if (!rendered) {
        return null;
    }

    return (
        <>
            <Link to={listPageRoute} ref={refCloseLink} />
            <StyledBackground
                className={`${opened ? "shown" : "hidden"}`}
                onAnimationEnd={(e) => {
                    if (
                        e.animationName === "modalBgDisappear" ||
                        e.animationName === "noEffectAnimation2"
                    ) {
                        setRendered(false);
                    }
                }}
            >
                <StyledModal className={`${opened ? "shown" : "hidden"}`}>
                    {screenType <= SCREEN_TYPES.tablet ? (
                        <>
                            <header>
                                {smallScreenHeader}
                                <CloseButton
                                    onClick={() => {
                                        refCloseLink.current.click();
                                    }}
                                />
                            </header>
                            <main>{smallScreenMain}</main>
                        </>
                    ) : (
                        <>
                            <header>
                                {largeScreenHeader}
                                <CloseButton
                                    onClick={() => {
                                        refCloseLink.current.click();
                                    }}
                                />
                            </header>
                            <main>{largeScreenMain}</main>
                        </>
                    )}
                </StyledModal>
            </StyledBackground>
        </>
    );
}
