//Imports
import styled from "styled-components";
import { colors, paddings } from "../../../../utils/style";

//Local styles
export const StyledContainer = styled.div`
    margin-top: 42px;
    margin-bottom: 42px;
    display: flex;
    justify-content: space-between;
`;

export const StyledBubble = styled.div`
    flex: 1;
    border-bottom-left-radius: 18px;
    header {
        background-color: ${colors.neutral.semiOpaqueBlack};
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        padding-left: 10px;
        p {
            margin-left: 12px;
            margin-right: 12px;
            font-style: italic;
            font-size: 14px;
        }
        h2 {
            text-align: right;
            padding-right: ${paddings.mainHorizontal};
            padding-top: 12px;
            padding-bottom: 12px;
            text-shadow: 0px 1px 8px ${colors.identity.bright};
        }
    }
    main {
        p {
            text-align: right;
            padding-left: 36px;
            padding-right: ${paddings.mainHorizontal};
        }
    }
`;
