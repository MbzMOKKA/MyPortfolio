//Imports
import React from "react";
import { Work } from "../../../../../data/content/works";
import { useText } from "../../../../../utils/hooks";
import { CTAsSection, SkillsUsedSection } from "../..";
import { StyledModalBottomOnLaptop, StyledImportanceBar } from "./style";
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
    const { renderComplexText } = useText();

    function SmallScreenHeader() {
        if (!work) {
            return null;
        }
        return (
            <>
                <MainIllustration showcase={work} />
                <CoreInfos>
                    <h1>{renderComplexText(work.nameId)}</h1>
                </CoreInfos>
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
                    <ShowcaseType showcase={work} />
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
                    <h1>{renderComplexText(work.nameId)}</h1>
                    <ShowcaseType showcase={work} />
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
