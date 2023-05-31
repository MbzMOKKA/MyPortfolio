//Imports
import React from "react";
import { StyledMain, StyledPageTitle, StyledMethods } from "./style";
import { ContactMethod } from "../../components/contact/";
import { STRING_IDS, contactMethods } from "../../data";
import AreaSeparator, {
    AREA_SEPARATOR_TYPES,
} from "../../components/other/AreaSeparator";
import { useTranslation } from "react-i18next";

//Component of the contact page
export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <StyledMain>
            <StyledPageTitle>
                <h1>{t(STRING_IDS.contactPageTitle)}</h1>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.pageHeader} />
            </StyledPageTitle>
            <StyledMethods>
                {contactMethods.map((method, index) => {
                    return (
                        <ContactMethod
                            key={index}
                            backgroundColor={method.backgroundColor}
                            nameId={method.nameId}
                            descriptionId={method.descriptionId}
                            contactInfo={method.contactInfo}
                            ctaNameId={method.ctaNameId}
                            ctaUrl={method.ctaUrl}
                        />
                    );
                })}
            </StyledMethods>
        </StyledMain>
    );
}
