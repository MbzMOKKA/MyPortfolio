//Imports
import styled from "styled-components";
import { colors, margins } from "../../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    padding-top: 64px;
    h1 {
        margin-left: ${margins.mainHorizontal};
        margin-right: ${margins.mainHorizontal};
        margin-bottom: 24px;
    }
`;

export const StyledStepList = styled.ul`
    position: relative;
    background-color: ${colors.neutral.semiOpaqueBlack};
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const StyledTimeline = styled.div`
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    flex: 1;
    border-left: 2px ${colors.identity.bright} dashed;
`;
