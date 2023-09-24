//Imports
import styled from "styled-components";
import { colors, breakpoints, margins, widths } from "../../../../utils/style";
import { AreaSeparator } from "../../../other";
import { AREA_SEPARATOR_TYPES } from "../../../other/AreaSeparator";

//Local styles
const tabletHorizontalPadding = "24px";
const laptopHorizontalPadding = "48px";
export const StyledSection = styled.section`
    width: 100%;
    margin: auto;
    margin-top: 64px;
    h1 {
        margin-left: ${margins.mainHorizontal};
        margin-right: ${margins.mainHorizontal};
        margin-bottom: 24px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
        margin-bottom: 64px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: ${widths.narrowContentLaptopMaxWidth};
        margin-top: 128px;
        margin-bottom: 128px;
        h1 {
            margin-bottom: 48px;
        }
    }
`;

export const StyledListContainer = styled.div`
    position: relative;
`;

export const StyledStepList = styled.ul`
    position: relative;
    background-color: ${colors.neutral.semiOpaqueBlack};
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 24px;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        background-color: unset;
        padding: 48px ${tabletHorizontalPadding};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 48px ${laptopHorizontalPadding};
    }
`;

export const StyledTimeline = styled.div`
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    flex: 1;
    border-left: 2px ${colors.identity.bright} dashed;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        left: ${tabletHorizontalPadding};
        border-width: 4px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        left: ${laptopHorizontalPadding};
    }
`;

export const StyledSeparator = styled(AreaSeparator)`
    position: absolute;
    z-index: 1;
    height: 28px;
    ${({ type }) =>
        type === AREA_SEPARATOR_TYPES.simpleUp ? "bottom:0" : "top:0"};
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        height: 36px;
    }
`;
