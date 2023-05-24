//Imports
import React from "react";
import { useTranslation } from "react-i18next";
import { StyledMain, StyledMethods } from "./style";
import { ContactMethod } from "../../components/contact/";
import { STRING_IDS } from "../../data/locales/stringIds";

//Component of the contact page
export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <StyledMain>
            <h1>{t("contactPageTitle")}</h1>
            <StyledMethods>
                <ContactMethod nameId={STRING_IDS.phone} />
            </StyledMethods>
        </StyledMain>
    );
}
