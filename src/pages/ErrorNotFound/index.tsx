//Imports
import React from "react";
import { StyledMain, StyledImage } from "./style";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/images";

//Component of the page shown if the route is incorrect
export default function ErrorNotFoundPage() {
    return (
        <StyledMain>
            <StyledImage>
                <img src={ICONS.warning} alt="test" />
            </StyledImage>
            <p>{`Cette page n'existe pas !`}</p>
            <Link to={"/"} className="button">
                {`Revenir à la page d'accueil`}
            </Link>
        </StyledMain>
    );
}
