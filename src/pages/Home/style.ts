//Imports
import styled from "styled-components";
import { breakpoints, paddings } from "../../utils/style";

export const StyledMain = styled.main`
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 0 ${paddings.laptop.mainHorizontal};
    }
`;
