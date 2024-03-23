//Imports
import React from "react";
import {
    StyledPicPart,
    StyledProfilePics,
    StyledSelfPic,
    StyledAvatar,
    StyledNamePart,
    StyledSummary,
    StyledMainPart,
} from "./style";
import { heavyDevCup, irlPic } from "../../../assets/images";
import { renderComplexText } from "../../../utils/misc";

//Component of the presentation section in the home page
export default function Presentation() {
    return (
        <section>
            <StyledMainPart>
                <StyledPicPart>
                    <StyledProfilePics>
                        <StyledSelfPic>
                            <img src={irlPic} alt={`Moi`} />
                        </StyledSelfPic>
                        <StyledAvatar>
                            <img src={heavyDevCup} alt={`Mon avatar`} />
                        </StyledAvatar>
                    </StyledProfilePics>
                </StyledPicPart>
                <StyledNamePart>
                    <p>{`Je suis`}</p>
                    <h1>{`Dylan Pean`}</h1>
                    <h2>{`(M.O.K.K.A.)`}</h2>
                </StyledNamePart>
            </StyledMainPart>
            <StyledSummary>
                <p>
                    {renderComplexText(`Français de 21 ans, passionné de développement de sites et jeux vidéo.
J'aime le travail bien fait, découvrir et progresser.`)}
                </p>
            </StyledSummary>
        </section>
    );
}
