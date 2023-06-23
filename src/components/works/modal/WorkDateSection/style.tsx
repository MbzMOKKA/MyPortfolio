//Imports
import styled from "styled-components";
import { colors } from "../../../../utils/style";

export const StyledSection = styled.section`
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
    margin-bottom: 48px;
    ::before {
        position: absolute;
        content: "";
        top: 5px;
        left: 50%;
        bottom: 5px;
        background-color: ${colors.neutral.semiOpaqueWhite};
        width: 1px;
    }
`;
