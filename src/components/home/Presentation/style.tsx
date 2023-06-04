//Imports
import styled from "styled-components";
import { borders, colors, paddings } from "../../../utils/style";
import { adjustColor } from "../../../utils/misc";

//Local styles
export const StyledPicPart = styled.div`
    position: relative;
    height: 200px;
    margin-bottom: 37%;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 3px black solid;
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
`;

export const StyledLight2 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: linear-gradient(to top, ${colors.identity.bright}, transparent);
    z-index: -1;
`;

export const StyledProfilePics = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -50%;
    left: 0;
    right: 0;
    z-index: 2;
`;

export const StyledSelfPic = styled.img`
    width: 55%;
    border-radius: ${borders.radius.round};
    box-shadow: 0px 0px 48px ${colors.identity.bright};
`;

export const StyledAvatar = styled.img`
    position: absolute;
    bottom: -12%;
    right: 12%;
    width: 27%;
    border-radius: ${borders.radius.round};
`;

export const StyledNamePart = styled.div`
    margin-bottom: 48px;
    p {
        text-align: center;
        font-size: 34px;
    }
    h1 {
        text-align: center;
        font-size: 56px;
    }
    h2 {
        text-align: center;
        font-size: 22px;
    }
`;

export const StyledSummary = styled.div`
    background-color: ${colors.neutral.semiOpaqueBlack};
    padding: 24px;
    padding-left: ${paddings.mainHorizontal};
    padding-right: ${paddings.mainHorizontal};
`;
