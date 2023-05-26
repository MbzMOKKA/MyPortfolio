//Imports
import styled from "styled-components";
import { borders, colors, margins } from "../../../utils/style";

//Types
type StyledMethodProps = {
    backgroundColor: string;
};

//Local styles
export const StyledMethod = styled.div<StyledMethodProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-radius: ${borders.radius.normal};
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin-bottom: 18px;
    box-shadow: 0px 0px 5px black;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    h2 {
        margin: 4px;
    }
`;

export const StyledInfo = styled.main`
    background-color: ${colors.neutral.semiOpaqueBlack};
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: ${borders.radius.normal};
    p {
        font-size: 18px;
        text-align: center;
        font-style: italic;
        margin-bottom: ${margins.nameBottom};
    }
    button {
    }
`;
