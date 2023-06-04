//Imports
import React from "react";
import { StyledMain, StyledPageTitle, StyledMethods } from "./style";
import { ContactMethod } from "../../components/contact/";
import { STRING_IDS, contactMethods } from "../../data";
import AreaSeparator, {
    AREA_SEPARATOR_TYPES,
} from "../../components/other/AreaSeparator";
import { useText } from "../../utils/hooks";

//Component of the contact page
export default function ContactPage() {
    const { renderText } = useText();

    return (
        <StyledMain>
            <StyledPageTitle>
                <h1>{renderText(STRING_IDS.contactPageTitle)}</h1>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.pageHeader} />
            </StyledPageTitle>
            <StyledMethods>
                {contactMethods.map((method, index) => {
                    return (
                        <ContactMethod
                            key={index}
                            logo={method.logo}
                            nameId={method.nameId}
                            descriptionId={method.descriptionId}
                            contactInfo={method.contactInfo}
                            ctaType={method.ctaType}
                            ctaUrl={method.ctaUrl}
                        />
                    );
                })}
            </StyledMethods>
        </StyledMain>
    );
}
