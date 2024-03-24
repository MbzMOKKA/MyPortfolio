//Imports
import React from "react";
import { Work } from "../../../../../data/content/works";
import { CTAsSection, SkillsUsedSection } from "../..";
import { StyledModalBottomOnLaptop, StyledImportanceBar } from "./style";
import {
    DateSection,
    MainIllustration,
    Description,
    ShowcaseModal,
    AttributesOnSmallScreen,
    CoreInfos,
    HeaderBottomOnLargeScreen,
} from "../../../common";

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
    function SmallScreenHeader() {
        if (!work) {
            return null;
        }
        return (
            <>
                <CoreInfos>
                    <h1>{work.name}</h1>
                </CoreInfos>
                <MainIllustration showcase={work} />
            </>
        );
    }

    function SmallScreenMain() {
        if (!work) {
            return null;
        }
        return (
            <>
                <AttributesOnSmallScreen>
                    <StyledImportanceBar
                        score={work.importance}
                        highscore={highestImportance}
                    />
                </AttributesOnSmallScreen>
                <DateSection showcase={work} />
                <Description showcase={work} />
                <SkillsUsedSection skillsId={work.skillsUsed} />
                <CTAsSection ctas={work.ctas} />
            </>
        );
    }

    function LargeScreenHeader() {
        if (!work) {
            return null;
        }
        return (
            <>
                <MainIllustration showcase={work} />
                <CoreInfos>
                    <h1>{work.name}</h1>
                    <HeaderBottomOnLargeScreen>
                        <StyledImportanceBar
                            score={work.importance}
                            highscore={highestImportance}
                        />
                        <DateSection showcase={work} />
                    </HeaderBottomOnLargeScreen>
                </CoreInfos>
            </>
        );
    }

    function LargeScreenMain() {
        if (!work) {
            return null;
        }
        return (
            <>
                <Description showcase={work} />
                <StyledModalBottomOnLaptop>
                    <SkillsUsedSection skillsId={work.skillsUsed} />
                    <CTAsSection ctas={work.ctas} />
                </StyledModalBottomOnLaptop>
            </>
        );
    }

    return (
        <ShowcaseModal
            listPageRoute={`/work`}
            opened={opened}
            smallScreenHeader={<>{SmallScreenHeader()}</>}
            smallScreenMain={<>{SmallScreenMain()}</>}
            largeScreenHeader={<>{LargeScreenHeader()}</>}
            largeScreenMain={<>{LargeScreenMain()}</>}
        />
    );
}
