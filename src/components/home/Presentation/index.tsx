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
import { STRINGS } from "../../../data";
import { heavyDevCup, irlPic } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the presentation section in the home page
export default function Presentation() {
    const { renderComplexText, renderText } = useText();

    const altSelfPic = renderText(STRINGS.selfPic);
    const altAvatar = renderText(STRINGS.avatarImg);

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
                    <p>{renderComplexText(STRINGS.iAm)}</p>
                    <h1>{`Dylan Pean`}</h1>
                    <h2>{`(M.O.K.K.A.)`}</h2>
                </StyledNamePart>
            </StyledMainPart>
            <StyledSummary>
                <p>{renderComplexText(STRINGS.presentationParagraph)}</p>
            </StyledSummary>
        </section>
    );
}
