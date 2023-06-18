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
import { STRING_IDS } from "../../../data";
import { heavyDevCup, irlPic } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the presentation section in the home page
export default function Presentation() {
    const { renderComplexText, renderText } = useText();

    const altSelfPic = renderText(STRING_IDS.selfPic);
    const altAvatar = renderText(STRING_IDS.selfPic);

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
                <p>{renderComplexText(STRING_IDS.iAm)}</p>
                <h1>M.O.K.K.A.</h1>
                <h2>(Dylan Pean)</h2>
            </StyledNamePart>
            <StyledSummary>
                <p>{renderComplexText(STRING_IDS.presentationParagraph)}</p>
            </StyledSummary>
        </section>
    );
}
