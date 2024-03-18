//Imports
import React from "react";
import {
    StyledMain,
    StyledPageTitle,
    StyledMethods,
    StyledSeparator,
} from "./style";
import { ContactMethodCard } from "../../components/contact/";
import { STRINGS, contactMethods } from "../../data";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";
import { useText } from "../../utils/hooks";

//Component of the contact page
export default function ContactPage() {
    const { renderComplexText } = useText();

    return (
        <StyledMain>
            <StyledPageTitle>
                <h1>{renderComplexText(STRINGS.contactPageTitle)}</h1>
                <StyledSeparator type={AREA_SEPARATOR_TYPES.simpleUp} />
            </StyledPageTitle>
            <StyledMethods>
                {contactMethods.map((method, index) => {
                    return <ContactMethodCard key={index} method={method} />;
                })}
            </StyledMethods>
        </StyledMain>
    );
}
