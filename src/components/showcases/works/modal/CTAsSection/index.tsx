//Imports
import React from "react";
import { StyledSection } from "./style";
import { Cta } from "../../../../../data/miscTypes";
import { useText } from "../../../../../utils/hooks";
import { Link } from "react-router-dom";

//Types
type WorkCTAsSectionProps = {
    ctas: Cta[];
};

//Component of the CTAs section of a work's modal
export default function WorkCTAsSection({ ctas }: WorkCTAsSectionProps) {
    const { renderText } = useText();

    return (
        <StyledSection>
            {ctas.map((cta, index) => {
                const text = renderText(cta.nameId);
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
