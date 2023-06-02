//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { useTranslation } from "react-i18next";
import { ContactMethod as ContactMethodProps } from "../../../data/contact_methods/contactMethods";

//Component of a close button
export default function ContactMethod(props: ContactMethodProps) {
    const { logo, nameId, /*descriptionId,*/ contactInfo, ctaType, ctaUrl } =
        props;
    const { t } = useTranslation();

    const ctaAltTxt = t(ctaType.nameId);

    return (
        <StyledMethod>
            <StyledHeader>
                <img src={logo} alt="logo" />
                <h2>{t(nameId)}</h2>
                {/* <p>{t(descriptionId)}</p> */}
            </StyledHeader>
            <StyledMain>
                <StyledInfo>
                    <p>{contactInfo}</p>
                </StyledInfo>
                <a
                    className="button"
                    href={ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={ctaType.icon} alt={ctaAltTxt} />
                </a>
            </StyledMain>
        </StyledMethod>
    );
}
