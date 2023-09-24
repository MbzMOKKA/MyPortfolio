//Imports
import React from "react";
import { StyledList } from "./style";
import { Work } from "../../../../data/content/works";
import { Skill } from "../../../../data/content/skills";
import { SHOWCASE_TYPES } from "../../../../data/miscTypes";
import { widths } from "../../../../utils/style";

//Types
type ShowcaseListProps = {
    showcases: Work[] | Skill[];
    card: (showcase: any, index: number) => React.ReactNode;
};

//Component of a showcase list
export default function ShowcaseList({ showcases, card }: ShowcaseListProps) {
    const cardWidth =
        showcases[0].type === SHOWCASE_TYPES.hardSkill
            ? widths.skillCardLogoLaptopWidth
            : widths.workCardThumbnailLaptopWidth;

    return (
        <StyledList cardWidth={cardWidth}>
            {showcases.map((showcase, index) => {
                return card(showcase, index);
            })}
        </StyledList>
    );
}
