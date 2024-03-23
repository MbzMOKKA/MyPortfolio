//Imports
import React from "react";
import { StyledMain, StyledPageTitle, StyledMethods } from "./style";
import { ContactMethodCard } from "../../components/contact/";
import { contactMethods } from "../../data";

//Component of the contact page
export default function ContactPage() {
    return (
        <StyledMain>
            <StyledPageTitle>
                <h1>{`Besoin de me joindre ?`}</h1>
            </StyledPageTitle>
            <StyledMethods>
                {contactMethods.map((method, index) => {
                    return <ContactMethodCard key={index} method={method} />;
                })}
            </StyledMethods>
        </StyledMain>
    );
}
