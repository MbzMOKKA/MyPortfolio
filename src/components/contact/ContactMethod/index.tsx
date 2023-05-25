//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo } from "./style";
import { useTranslation } from "react-i18next";

//Types
type ContactMethodProps = {
    backgroundColor: string;
    nameId: string;
    descriptionId: string;
    contactInfo: string;
    ctaNameId: string;
    ctaUrl: string;
};

//Component of a close button
export default function ContactMethod(props: ContactMethodProps) {
    const {
        backgroundColor,
        nameId,
        descriptionId,
        contactInfo,
        ctaNameId,
        ctaUrl,
    } = props;
    const { t } = useTranslation();

    return (
        <StyledMethod backgroundColor={backgroundColor}>
            <StyledHeader>
                <h2>{t(nameId)}</h2>
                {/* <p>{t(descriptionId)}</p> */}
            </StyledHeader>
            <StyledInfo>
                <p>{contactInfo}</p>
                <a
                    className="button"
                    href={ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t(ctaNameId)}
                </a>
            </StyledInfo>
        </StyledMethod>
    );
}
