//Imports
import styled from "styled-components";
import { borders, colors, breakpoints, paddings } from "../../../utils/style";
import { adjustColor } from "../../../utils/misc";

//Local styles
export const StyledMainPart = styled.div`
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 86px 0;
    }
`;

export const StyledPicPart = styled.div`
    position: relative;
    height: 200px;
    margin-bottom: 150px;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 3px black solid;
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        height: 250px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        background-color: unset;
        height: auto;
        border: none;
        margin: unset;
    }
`;

export const StyledLight1 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 12px;
    background: linear-gradient(
        to top,
        ${adjustColor(colors.identity.bright, 1.3)},
        transparent
    );
    z-index: 1;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        display: none;
    }
`;

export const StyledLight2 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: linear-gradient(to top, ${colors.identity.bright}, transparent);
    z-index: -1;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        display: none;
    }
`;

export const StyledProfilePics = styled.div`
    width: 55%;
    max-width: 255px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -50%;
    left: 0;
    right: 0;
    z-index: 2;
    margin: auto;
    animation: profilePictureFloat 4000ms infinite ease-in-out;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        z-index: unset;
        position: relative;
        left: unset;
        right: unset;
        bottom: unset;
        margin: unset;
        width: 100%;
        margin-right: 86px;
    }
`;

export const StyledSelfPic = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        border-radius: ${borders.radius.round};
        box-shadow: 0px 0px 48px ${colors.identity.bright};
    }
`;

export const StyledAvatar = styled.div`
    position: absolute;
    bottom: -12%;
    right: -12%;
    width: 50%;
    max-width: 128px;
    img {
        width: 100%;
        height: 100%;
        border-radius: ${borders.radius.round};
    }
`;

export const StyledNamePart = styled.div`
    margin-bottom: 48px;
    p {
        line-height: 1;
        text-align: center;
        font-size: 34px;
    }
    h1 {
        text-align: center;
        font-size: 56px;
        margin-bottom: 6px;
    }
    h2 {
        text-align: center;
        font-size: 22px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin-bottom: 0;
        p,
        h1,
        h2 {
            text-align: left;
        }
    }
`;

export const StyledSummary = styled.div`
    background-color: ${colors.neutral.semiOpaqueBlack};
    padding: 24px ${paddings.mobile.mainHorizontal};
    text-align: center;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        width: max-content;
        margin: auto;
        border-radius: ${borders.radius.normal};
        padding: 36px;
    }
`;
