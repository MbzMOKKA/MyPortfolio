//Imports
import styled from "styled-components";
import { breakpoints, colors, borders } from "../../../../utils/style";
import { SHOWCASE_TYPES } from "../../../../data/miscTypes";
import { workThumbnailAspectRatio } from "../../../../utils/style/spacings";

//Types
type StyledMainIllustrationProps = {
    type: SHOWCASE_TYPES;
    inCard: boolean;
    mobileWidth: string;
    mobileHeight: string;
    laptopWidth: string;
    laptopHeight: string;
};

//Common constants
const tabletModalMaxWorkRawWidth = breakpoints.raw.mobileLargeMinWidth - 50;
const tabletModalMaxSkillSize = `${
    breakpoints.raw.mobileLargeMinWidth - 150
}px`;
const tabletModalMaxWorkWidth = `${tabletModalMaxWorkRawWidth}px`;
const tabletModalMaxWorkHeight = `${
    tabletModalMaxWorkRawWidth / workThumbnailAspectRatio
}px`;
const tabletCardMaxSkillSize = `140px`;
const tabletCardMaxWorkRawWidth = 200;
const tabletCardMaxWorkWidth = `${tabletCardMaxWorkRawWidth}px`;
const tabletCardMaxWorkHeight = `${
    tabletCardMaxWorkRawWidth / workThumbnailAspectRatio
}px`;

//Local styles
export const StyledMainIllustration = styled.div<StyledMainIllustrationProps>`
    background-color: ${colors.neutral.semiOpaqueBlack};
    width: ${({ mobileWidth }) => mobileWidth};
    height: ${({ mobileHeight }) => mobileHeight};
    overflow: hidden;
    ${({ inCard, type }) => (inCard ? `margin-right: 6px;` : null)};
    ${({ inCard, type }) =>
        type === SHOWCASE_TYPES.hardSkill
            ? inCard
                ? `padding: 12px;`
                : `padding: 72px;`
            : null}
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        ${({ inCard, type }) =>
            type === SHOWCASE_TYPES.hardSkill
                ? inCard
                    ? `max-width:${tabletCardMaxSkillSize};max-height:${tabletCardMaxSkillSize};`
                    : `max-width:${tabletModalMaxSkillSize};max-height:${tabletModalMaxSkillSize};`
                : inCard
                ? `max-width:${tabletCardMaxWorkWidth};max-height:${tabletCardMaxWorkHeight};`
                : `max-width:${tabletModalMaxWorkWidth};max-height:${tabletModalMaxWorkHeight};`}
        ${({ inCard }) => (inCard ? null : `border-radius:32px;`)}
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: ${({ laptopWidth }) => laptopWidth};
        height: ${({ laptopHeight }) => laptopHeight};
        max-width: unset;
        max-height: unset;
        ${({ inCard }) =>
            inCard
                ? `margin-right: 0`
                : `border-radius: ${borders.radius.normal}`};
        ${({ type }) =>
            type === SHOWCASE_TYPES.hardSkill ? `padding: 2vw;` : null}
    }
`;
