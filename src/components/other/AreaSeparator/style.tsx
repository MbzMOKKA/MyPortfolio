//Imports
import styled from "styled-components";
import { borders, shadows } from "../../../utils/style";

export const StyledModalHeaderSeparator = styled.div`
    width: 100%;
    height: 8px;
    border-top: ${borders.special.modalHeaderSeparatorTop};
    border-bottom: ${borders.special.modalHeaderSeparatorBottom};
`;

export const StyledPageTitleSeparator = styled.div`
    width: 100%;
    height: 10px;
    border-bottom: ${borders.common.blackSlim};
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;
