//Imports
import styled from "styled-components";
import { borders, breakpoints, colors } from "../../../../../utils/style";

//Types
type StyledSectionProps = {
    dates: number;
};

//Local styles
export const StyledSection = styled.section<StyledSectionProps>`
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
    margin-bottom: 48px;
    ${({ dates }) =>
        dates === 2
            ? ` ::before {
        position: absolute;
        content: "";
        top: 5px;
        left: 50%;
        bottom: 5px;
        background-color: ${colors.neutral.semiOpaqueWhite};
        width: 1px;
    }`
            : null}
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: unset;
        margin-bottom: 0;
        border-radius: ${borders.radius.normal};
        flex: 1;
    }
`;
