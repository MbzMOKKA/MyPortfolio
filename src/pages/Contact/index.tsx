//Imports
import React from "react";
import {
    StyledMain,
    StyledPageTitle,
    StyledMethods,
    StyledSeparator,
} from "./style";
import { ContactMethodCard } from "../../components/contact/";
import { contactMethods } from "../../data";
import { AREA_SEPARATOR_TYPES } from "../../components/other/AreaSeparator";

//Component of the contact page
export default function ContactPage() {
    return (
        <StyledMain>
            <StyledPageTitle>
                <h1>{`Besoin de me joindre ?`}</h1>
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
