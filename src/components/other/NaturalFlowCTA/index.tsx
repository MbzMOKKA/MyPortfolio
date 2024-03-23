//Imports
import React from "react";
import { StyledLink } from "./style";

//Types
type NaturalFlowCTAProps = {
    url: string;
    text: string;
};

//Component of natural flow CTA button
export default function NaturalFlowCTA({ url, text }: NaturalFlowCTAProps) {
    return (
        <StyledLink to={url} className="button">
            {text}
        </StyledLink>
    );
}
