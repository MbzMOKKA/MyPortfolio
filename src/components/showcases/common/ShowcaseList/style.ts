//Imports
import styled from "styled-components";
import {
    breakpoints,
    margins,
    paddings,
    widths,
} from "../../../../utils/style";

//Types
type StyledListProps = {
    cardWidth: string;
};

//Local styles
export const StyledList = styled.ul<StyledListProps>`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${margins.grid};
    padding-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
    margin: auto;
    margin-bottom: 128px;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        width: ${widths.narrowContentTabletMaxWidth};
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: 100%;
        padding: 0px ${paddings.laptop.mainHorizontal};
        grid-template-columns: repeat(
            auto-fill,
            ${({ cardWidth }) => cardWidth}
        );
        justify-content: space-between;
        gap: 64px 0;
    }
`;
