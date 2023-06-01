//Imports
import styled from "styled-components";
import { borders, colors, paddings } from "../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    background-color: ${colors.neutral.semiOpaqueWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${paddings.mainHorizontal};
    padding-top: 64px;
    padding-bottom: 64px;
    p {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        line-height: 2;
    }
    img {
        width: 50%;
        border-radius: ${borders.radius.normal};
        box-shadow: 0px 4px 64px ${colors.identity.bright};
        margin-top: 30px;
    }
`;
