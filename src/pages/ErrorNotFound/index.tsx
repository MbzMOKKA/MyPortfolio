//Imports
import React from "react";
import { StyledMain, StyledImage } from "./style";
import { useText } from "../../utils/hooks";
import { STRING_IDS } from "../../data";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/images";

//Component of the page shown if the route is incorrect
export default function ErrorNotFoundPage() {
    const { renderText } = useText();

    return (
        <StyledMain>
            <StyledImage>
                <img src={ICONS.warning} alt="test" />
            </StyledImage>
            <p>{renderText(STRING_IDS.errorNotFound)}</p>
            <Link to={"/"} className="button">
                {renderText(STRING_IDS.goToHomepage)}
            </Link>
        </StyledMain>
    );
}
