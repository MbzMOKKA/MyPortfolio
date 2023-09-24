//Imports
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    StyledMain,
    StyledSeparator,
    StyledStats,
    StyledTopSection,
} from "./style";
import { AREA_SEPARATOR_TYPES } from "../../../other/AreaSeparator";
import ShowcaseList from "../ShowcaseList";
import { Work } from "../../../../data/content/works";
import { Skill } from "../../../../data/content/skills";

//Types
type ShowcasePageProps = {
    id: string | undefined;
    shownShowcases: Work[] | Skill[];
    card: (showcase: any, index: number) => React.ReactNode;
    modal: React.ReactNode;
    showcaseGotSelected: boolean;
    statText: string;
};

//Component of a showcase type page
export default function ShowcasePage({
    id,
    shownShowcases,
    card,
    modal,
    showcaseGotSelected,
    statText,
}: ShowcasePageProps) {
    const refNotFound = useRef<any>();

    useEffect(() => {
        if (showcaseGotSelected === false && id !== undefined) {
            refNotFound.current?.click();
        }
    }, [showcaseGotSelected, id]);

    return (
        <>
            {modal}
            <StyledMain>
                <Link to={"/not-found"} ref={refNotFound} />
                <StyledTopSection>
                    <StyledStats>{statText}</StyledStats>
                </StyledTopSection>
                <StyledSeparator type={AREA_SEPARATOR_TYPES.simpleDown} />
                <ShowcaseList showcases={shownShowcases} card={card} />
            </StyledMain>
        </>
    );
}
