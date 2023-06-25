//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { useText } from "../../../utils/hooks";
import { ContactMethod } from "../../../data/content/contactMethods";

//Types
type ContactMethodProps = {
    method: ContactMethod;
};

//Component of a close button
export default function ContactMethodCard({ method }: ContactMethodProps) {
    const { renderComplexText, renderText } = useText();

    const ctaAltTxt = renderText(method.cta.nameId);

    return (
        <StyledMethod>
            <StyledHeader>
                <img src={method.logo} alt="logo" />
                <h2>{renderComplexText(method.nameId)}</h2>
                {/* <p>{renderComplexText(descriptionId)}</p> */}
            </StyledHeader>
            <StyledMain>
                <StyledInfo>
                    <p>{method.contactInfo}</p>
                </StyledInfo>
                <a
                    className="button"
                    href={method.cta.action}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={method.cta.icon} alt={ctaAltTxt} />
                </a>
            </StyledMain>
        </StyledMethod>
    );
}
