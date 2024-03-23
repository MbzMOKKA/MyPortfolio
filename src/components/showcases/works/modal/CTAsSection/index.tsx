//Imports
import React from "react";
import { StyledSection } from "./style";
import { Cta } from "../../../../../data/miscTypes";
import { Link } from "react-router-dom";

//Types
type WorkCTAsSectionProps = {
    ctas: Cta[];
};

//Component of the CTAs section of a work's modal
export default function WorkCTAsSection({ ctas }: WorkCTAsSectionProps) {
    return (
        <StyledSection>
            {ctas.map((cta, index) => {
                const text = cta.name;
                return (
                    <Link
                        to={cta.action}
                        key={index}
                        className="button"
                        target="_blank"
                    >
                        {text}
                        <img src={cta.icon} alt={text} />
                    </Link>
                );
            })}
        </StyledSection>
    );
}
