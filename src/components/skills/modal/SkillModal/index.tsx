//Imports
import React, { useEffect, useRef, useState } from "react";
import { useText } from "../../../../utils/hooks";
import { Link } from "react-router-dom";
import { CloseButton } from "../../../other";
import { StyledBackground, StyledModal, StyledDescription } from "./style";
import { Skill } from "../../../../data/content/skills";
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
                        <img src={skill.logo} alt={name} />
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
