//Imports
import React from "react";
import { StyledMain, StyledPageTitle, StyledMethods } from "./style";
import { ContactMethodCard } from "../../components/contact/";
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
                <AreaSeparator type={AREA_SEPARATOR_TYPES.simpleUp} />
            </StyledPageTitle>
            <StyledMethods>
                {contactMethods.map((method, index) => {
                    return <ContactMethodCard key={index} method={method} />;
                })}
            </StyledMethods>
        </StyledMain>
    );
}
