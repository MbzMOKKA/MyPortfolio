//Imports
import styled from "styled-components";
import { colors, margins } from "../../../utils/style";

//Local styles
export const StyledSetting = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${margins.special.settingsInput};
    .option {
        margin: ${margins.common.option};
    }
`;

export const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${margins.common.nameBottom};
    label {
        margin-right: ${margins.common.nameSeparatorRight};
        font-size: 20px;
    }
    div {
        flex: 1;
        height: 2px;
        background-color: ${colors.neutral.semiOpaqueWhite};
    }
`;
