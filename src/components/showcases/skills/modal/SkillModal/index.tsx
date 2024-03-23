//Imports
import React from "react";
import { Skill } from "../../../../../data/content/skills";
import { StyledMasteryBar } from "./style";
import {
    DateSection,
    MainIllustration,
    ShowcaseModal,
    AttributesOnSmallScreen,
    CoreInfos,
    HeaderBottomOnLargeScreen,
} from "../../../common";
import { renderComplexText } from "../../../../../utils/misc";

//Types
type SkillModalProps = {
    skill: Skill | null;
    opened: boolean;
};

//Component of a skill's modal
export default function SkillModal({ skill, opened }: SkillModalProps) {
    function SmallScreenHeader() {
        if (!skill) {
            return null;
        }
        return (
            <>
                <MainIllustration showcase={skill} />
                <CoreInfos>
                    <h1>{skill.name}</h1>
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
                </AttributesOnSmallScreen>
                <DateSection showcase={skill} />
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
                    <h1>{renderComplexText(skill.name)}</h1>
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
        return <></>;
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
