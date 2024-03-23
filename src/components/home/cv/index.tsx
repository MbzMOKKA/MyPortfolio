//Imports
import React from "react";
import { StyledSection } from "./style";
import { Link } from "react-router-dom";

//Component of the CV section
export default function CV() {
    return (
        <StyledSection>
            <p>
                Vous pouvez également consulter mon CV{" "}
                <Link to={`/dylan_pean_CV_2024.pdf`} target="_blank">
                    ici
                </Link>
            </p>
        </StyledSection>
    );
}
