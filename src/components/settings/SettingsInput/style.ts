//Imports
import styled from "styled-components";
import { colors, margins } from "../../../utils/style";

//Local styles
export const StyledSetting = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 12px 0px;
    .option {
        margin: ${margins.option};
    }
`;

export const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${margins.nameBottom};
    label {
        margin-right: ${margins.nameSeparatorRight};
        font-size: 18px;
    }
    div {
        flex: 1;
        height: 2px;
        background-color: ${colors.neutral.semiOpaqueWhite};
    }
`;
