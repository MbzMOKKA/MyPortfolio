//Imports
import styled from "styled-components";
import { colors, margins, paddings } from "../../../../utils/style";

//Local styles
const timelineLeftPadding = `calc(${paddings.mainHorizontal} + 10px)`;

export const StyledSection = styled.section`
    padding-top: 24px;
    h1 {
        margin-left: ${margins.mainHorizontal};
        margin-right: ${margins.mainHorizontal};
        margin-bottom: 8px;
    }
`;

export const StyledStepList = styled.ul`
    position: relative;
    background-color: ${colors.neutral.semiOpaqueBlack};
    display: flex;
    flex-direction: column;
    padding-left: ${timelineLeftPadding};
    padding-right: ${paddings.mainHorizontal};
`;

export const StyledTimeline = styled.div`
    position: absolute;
    top: 0;
    left: ${timelineLeftPadding};
    bottom: 0;
    flex: 1;
    border-left: 2px white dashed;
`;
