//Imports
import React from "react";
import { Skill } from "../../../../../data/content/skills";
import { useText } from "../../../../../utils/hooks";
import { StyledMasteryBar } from "./style";
import {
    DateSection,
    MainIllustration,
    Description,
    ShowcaseModal,
    ShowcaseType,
    AttributesOnSmallScreen,
    CoreInfos,
    HeaderBottomOnLargeScreen,
} from "../../../common";

//Types
type SkillModalProps = {
    skill: Skill | null;
    opened: boolean;
};

//Component of a skill's modal
export default function SkillModal({ skill, opened }: SkillModalProps) {
    const { renderComplexText } = useText();

    function SmallScreenHeader() {
        if (!skill) {
            return null;
        }
        return (
            <>
                <MainIllustration showcase={skill} />
                <CoreInfos>
                    <h1>{renderComplexText(skill.nameId)}</h1>
                </CoreInfos>
            </>
        );
    }

    function SmallScreenMain() {
        if (!skill) {
            return null;
        }
        return (
            <>
                <AttributesOnSmallScreen>
                    <StyledMasteryBar mastery={skill.mastery} />
                    <ShowcaseType showcase={skill} />
                </AttributesOnSmallScreen>
                <DateSection showcase={skill} />
                <Description showcase={skill} />
            </>
        );
    }

    function LargeScreenHeader() {
        if (!skill) {
            return null;
        }
        return (
            <>
                <MainIllustration showcase={skill} />
                <CoreInfos>
                    <h1>{renderComplexText(skill.nameId)}</h1>
                    <ShowcaseType showcase={skill} />
                    <HeaderBottomOnLargeScreen>
                        <StyledMasteryBar mastery={skill.mastery} />
                        <DateSection showcase={skill} />
                    </HeaderBottomOnLargeScreen>
                </CoreInfos>
            </>
        );
    }

    function LargeScreenMain() {
        if (!skill) {
            return null;
        }
        return (
            <>
                <Description showcase={skill} />
            </>
        );
    }

    return (
        <ShowcaseModal
            listPageRoute={`/skill`}
            opened={opened}
            smallScreenHeader={<>{SmallScreenHeader()}</>}
            smallScreenMain={<>{SmallScreenMain()}</>}
            largeScreenHeader={<>{LargeScreenHeader()}</>}
            largeScreenMain={<>{LargeScreenMain()}</>}
        />
    );
}

/*
//Imports
import React, { useEffect, useRef, useState } from "react";
import { useText } from "../../../../../utils/hooks";
import { Link } from "react-router-dom";
import { CloseButton } from "../../../../other";
import { StyledBackground, StyledModal, StyledDescription } from "./style";
import { Skill } from "../../../../../data/content/skills";
import SkillDateSection from "../SkillDateSection";
import SkillAttributeSection from "../SkillAttributeSection";

//Types
type SkillModalProps = {
    skill: Skill | null;
    opened: boolean;
};

//Component of a skill's modal
export default function SkillModal({ skill, opened }: SkillModalProps) {
    const refCloseLink = useRef<any>(null);
    const [rendered, setRendered] = useState(false);
    const { renderText, renderComplexText } = useText();

    useEffect(() => {
        if (opened) {
            setRendered(true);
        }
    }, [opened]);

    if (!skill || !rendered) {
        return null;
    }

    const name = renderText(skill.nameId);

    return (
        <>
            <Link to={`/skill`} ref={refCloseLink} />
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
                        <img src={skill.logoHQ} alt={name} />
                        <h1>{name}</h1>
                        <CloseButton
                            onClick={() => {
                                refCloseLink.current.click();
                            }}
                        />
                    </header>
                    <main>
                        <SkillAttributeSection skill={skill} />
                        <SkillDateSection skill={skill} />
                        <StyledDescription>
                            {renderComplexText(skill.descriptionId)}
                        </StyledDescription>
                    </main>
                </StyledModal>
            </StyledBackground>
        </>
    );
}
*/
