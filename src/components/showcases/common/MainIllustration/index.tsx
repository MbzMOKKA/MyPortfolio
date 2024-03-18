//Imports
import React from "react";
import { StyledMainIllustration } from "./style";
import { useText } from "../../../../utils/hooks";
import { heights, widths } from "../../../../utils/style";
import { SHOWCASE_TYPES } from "../../../../data/miscTypes";

//Types
type MainIllustrationProps = {
    showcase: any;
    inCard?: boolean;
};

//Component of a showcase's type in its modal
export default function MainIllustration({
    showcase,
    inCard = false,
}: MainIllustrationProps) {
    const { renderText } = useText();
    const alt = renderText(showcase.nameId);
    const isSkill = showcase.type === SHOWCASE_TYPES.hardSkill;
    const mobileWidth = inCard
        ? isSkill
            ? widths.skillCardLogoMobileWidth
            : widths.workCardThumbnailMobileWidth
        : isSkill
        ? widths.skillModalLogoMobileWidth
        : widths.workModalThumbnailMobileWidth;
    const mobileHeight = inCard
        ? isSkill
            ? heights.skillCardLogoMobileHeight
            : heights.workCardThumbnailMobileHeight
        : isSkill
        ? heights.skillModalLogoMobileHeight
        : heights.workModalThumbnailMobileHeight;
    const laptopWidth = inCard
        ? isSkill
            ? widths.skillCardLogoLaptopWidth
            : widths.workCardThumbnailLaptopWidth
        : isSkill
        ? widths.skillModalLogoLaptopWidth
        : widths.workModalThumbnailLaptopWidth;
    const laptopHeight = inCard
        ? isSkill
            ? heights.skillCardLogoLaptopHeight
            : heights.workCardThumbnailLaptopHeight
        : isSkill
        ? heights.skillModalLogoLaptopHeight
        : heights.workModalThumbnailLaptopHeight;
    const img =
        showcase.type === SHOWCASE_TYPES.webSite
            ? inCard
                ? showcase.thumbnail
                : showcase.thumbnailHQ
            : showcase.logoHQ;

    return (
        <StyledMainIllustration
            type={showcase.type}
            inCard={inCard}
            mobileWidth={mobileWidth}
            mobileHeight={mobileHeight}
            laptopWidth={laptopWidth}
            laptopHeight={laptopHeight}
        >
            <img src={img} alt={alt} />
        </StyledMainIllustration>
    );
}
