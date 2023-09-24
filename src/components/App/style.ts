//Imports
import styled from "styled-components";
import { colors } from "../../utils/style";

//Local styles
export const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${colors.neutral.bodyBgColor};
    z-index: -100;
`;
