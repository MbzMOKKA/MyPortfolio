//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { useText } from "../../../utils/hooks";
import { ContactMethod } from "../../../data/content/contactMethods";
import { selectScreenType } from "../../../redux_toolkit";
import { useSelector } from "react-redux";
import { SCREEN_TYPES } from "../../../redux_toolkit/miscSlice";

//Types
type ContactMethodProps = {
    method: ContactMethod;
};

//Component of a close button
export default function ContactMethodCard({ method }: ContactMethodProps) {
    const { renderComplexText, renderText } = useText();
    const screenType = useSelector(selectScreenType);
    const ctaAltTxt = renderText(method.cta.nameId);

    return (
        <StyledMethod>
            <StyledHeader>
                <img src={method.logo} alt="logo" draggable={false} />
                <h2>{renderComplexText(method.nameId)}</h2>
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
                    {screenType >= SCREEN_TYPES.tablet
                        ? renderText(method.cta.nameId)
                        : null}
                    <img
                        src={method.cta.icon}
                        alt={ctaAltTxt}
                        draggable={false}
                    />
                </a>
            </StyledMain>
        </StyledMethod>
    );
}
