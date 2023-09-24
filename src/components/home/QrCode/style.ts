//Imports
import styled from "styled-components";
import {
    borders,
    colors,
    breakpoints,
    paddings,
    widths,
} from "../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    background-color: ${colors.neutral.semiOpaqueWhite};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: ${paddings.mobile.mainHorizontal};
    padding-top: 64px;
    padding-bottom: 64px;
    p {
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        line-height: 2;
    }
    img {
        width: 50%;
        max-width: 255px;
        border-radius: ${borders.radius.normal};
        box-shadow: 0px 4px 64px ${colors.identity.bright};
        margin-top: 30px;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        max-width: ${widths.narrowContentTabletMaxWidth};
        border-radius: 36px;
        padding: 36px;
        p {
            font-size: 25px;
        }
        img {
            margin-top: 48px;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        max-width: ${widths.narrowContentLaptopMaxWidth};
        border-radius: 48px;
        padding: 48px;
        img {
            max-width: 200px;
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        border-radius: 64px;
        padding: 64px;
        p {
            font-size: 30px;
        }
        img {
            max-width: 255px;
            margin-top: 48px;
        }
    }
`;
