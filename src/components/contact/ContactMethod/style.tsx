//Imports
import styled from "styled-components";
import {
    borders,
    colors,
    margins,
    paddings,
    shadows,
} from "../../../utils/style";

//Types
type StyledMethodProps = {
    backgroundColor: string;
};

//Local styles
export const StyledMethod = styled.div<StyledMethodProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${paddings.special.contactMethod};
    border-radius: ${borders.radius.normal};
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin-bottom: ${margins.special.betweenContactMethod};
    box-shadow: ${shadows.special.contactMethod};
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
`;

export const StyledInfo = styled.main`
    background-color: ${colors.neutral.semiOpaqueBlack};
    display: flex;
    flex-direction: column;
    padding: ${paddings.special.contactInfo};
    border-radius: ${borders.radius.normal};
    p {
        font-size: 18px;
        text-align: center;
        font-style: italic;
        margin-bottom: ${margins.common.nameBottom};
    }
    button {
    }
`;
