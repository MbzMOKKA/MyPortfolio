//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { useText } from "../../../utils/hooks";
import { ContactMethod } from "../../../data/contact_methods/contactMethods";

//Types
type ContactMethodProps = {
    method: ContactMethod;
};

//Component of a close button
export default function ContactMethodCard({ method }: ContactMethodProps) {
    const { renderText, t } = useText();

    const ctaAltTxt = t(method.cta.nameId);

    return (
        <StyledMethod>
            <StyledHeader>
                <img src={method.logo} alt="logo" />
                <h2>{renderText(method.nameId)}</h2>
                {/* <p>{renderText(descriptionId)}</p> */}
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
