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
    StyledMainPart,
} from "./style";
import { STRING_IDS } from "../../../data";
import { heavyDevCup, irlPic } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the presentation section in the home page
export default function Presentation() {
    const { renderComplexText, renderText } = useText();

    const altSelfPic = renderText(STRING_IDS.selfPic);
    const altAvatar = renderText(STRING_IDS.avatarImg);

    return (
        <section>
            <StyledMainPart>
                <StyledPicPart>
                    <StyledLight1 />
                    <StyledLight2 />
                    <StyledProfilePics>
                        <StyledSelfPic>
                            <img src={irlPic} alt={altSelfPic} />
                        </StyledSelfPic>
                        <StyledAvatar>
                            <img src={heavyDevCup} alt={altAvatar} />
                        </StyledAvatar>
                    </StyledProfilePics>
                </StyledPicPart>
                <StyledNamePart>
                    <p>{renderComplexText(STRING_IDS.iAm)}</p>
                    <h1>{`Dylan Pean`}</h1>
                    <h2>{`(M.O.K.K.A.)`}</h2>
                </StyledNamePart>
            </StyledMainPart>
            <StyledSummary>
                <p>{renderComplexText(STRING_IDS.presentationParagraph)}</p>
            </StyledSummary>
        </section>
    );
}
