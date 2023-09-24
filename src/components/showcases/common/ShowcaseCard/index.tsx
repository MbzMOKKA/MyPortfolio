//Imports
import React, { ReactNode } from "react";
import { StyledCard, StyledSummary, StyledTitle } from "./style";
import { Work } from "../../../../data/content/works";
import { useText } from "../../../../utils/hooks";
import { ICONS } from "../../../../assets/images";
import { Skill } from "../../../../data/content/skills";
import MainIllustration from "../MainIllustration";
import { Link } from "react-router-dom";

//Types
type ShowcaseCardProps = {
    showcase: Work | Skill;
    listPageRoute: string;
    children?: ReactNode;
};

//Component of a showcase card
export default function ShowcaseCard({
    showcase,
    listPageRoute,
    children,
}: ShowcaseCardProps) {
    const { renderText } = useText();

    return (
        <StyledCard type={showcase.type}>
            <Link to={`${listPageRoute}/${showcase.id}`}>
                <MainIllustration showcase={showcase} inCard={true} />
                <StyledSummary>
                    <StyledTitle>
                        <h2>{renderText(showcase.nameId)}</h2>
                        <img src={ICONS.info} alt="" />
                    </StyledTitle>
                    {children}
                </StyledSummary>
            </Link>
        </StyledCard>
    );
}
