//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../../utils/style";
import { SHOWCASE_TYPES } from "../../../../../data/miscTypes";
import { getShowcaseTypeColor } from "../../../../../utils/misc";

//Types
type StyledTypeProps = {
    type: SHOWCASE_TYPES;
};

//Local styles
export const StyledType = styled.p<StyledTypeProps>`
    width: max-content;
    color: ${({ type }) => getShowcaseTypeColor(type)};
    border: 2px ${({ type }) => getShowcaseTypeColor(type)} solid;
    padding: 5px 6px;
    font-size: 16px;
    line-height: 1;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 6px 8px;
        font-size: 18px;
        margin-top: 8px;
        margin-left: 6px;
    }
`;
