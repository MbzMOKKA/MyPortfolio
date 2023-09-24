//Imports
import styled from "styled-components";
import { borders, breakpoints, colors, shadows } from "../../../../utils/style";
import { getShowcaseTypeColor } from "../../../../utils/misc";

//Types
type StyledCardProps = {
    type: any;
};

//Local styles
export const StyledCard = styled.li<StyledCardProps>`
    list-style: none;
    a {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        @media (min-width: ${breakpoints.tabletMinWidth}) {
            background-color: ${colors.neutral.semiOpaqueBlack};
            box-shadow: ${shadows.cardLaptop};
            border-top-right-radius: ${borders.radius.normal};
            border-bottom-right-radius: ${borders.radius.normal};
        }
        @media (min-width: ${breakpoints.laptopMinWidth}) {
            flex-direction: column;
            overflow: hidden;
            border-top-right-radius: 0;
            border-bottom-left-radius: ${borders.radius.normal};
            border-bottom-right-radius: ${borders.radius.normal};
            transition-property: box-shadow;
            transition-duration: 200ms;
            :hover {
                box-shadow: 0px 0px 64px
                    ${({ type }) => getShowcaseTypeColor(type)};
            }
        }
    }
`;

export const StyledSummary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        padding: 12px 12px 12px 6px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: 100%;
        padding: 12px 8px;
    }
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
    h2 {
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img {
        margin-left: 12px;
        opacity: 0.35;
        width: 18px;
        height: 18px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        img {
            display: none;
        }
    }
`;
