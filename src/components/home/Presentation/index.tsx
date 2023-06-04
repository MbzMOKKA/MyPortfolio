//Imports
import React from "react";
import {
    StyledPicPart,
    StyledProfilePics,
    StyledLight1,
    StyledLight2,
    StyledSelfPic,
    StyledAvatar,
    StyledNamePart,
    StyledSummary,
} from "./style";
import { useTranslation } from "react-i18next";
import { STRING_IDS } from "../../../data";
import { heavyDevCup, irlPic } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the presentation section in the home page
export default function Presentation() {
    const { t } = useTranslation();
    const { renderText } = useText();

    const altSelfPic = t(STRING_IDS.selfPic);
    const altAvatar = t(STRING_IDS.selfPic);

    return (
        <section>
            <StyledPicPart>
                <StyledLight1 />
                <StyledLight2 />
                <StyledProfilePics>
                    <StyledSelfPic src={irlPic} alt={altSelfPic} />
                    <StyledAvatar src={heavyDevCup} alt={altAvatar} />
                </StyledProfilePics>
            </StyledPicPart>
            <StyledNamePart>
                <p>{renderText(STRING_IDS.iAm)}</p>
                <h1>M.O.K.K.A.</h1>
                <h2>(Dylan Pean)</h2>
            </StyledNamePart>
            <StyledSummary>
                <p>{renderText(STRING_IDS.presentationParagraph)}</p>
            </StyledSummary>
        </section>
    );
}
