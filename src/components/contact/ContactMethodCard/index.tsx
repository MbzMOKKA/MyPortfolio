//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { ContactMethod } from "../../../data/content/contactMethods";
import { selectScreenType } from "../../../redux_toolkit";
import { useSelector } from "react-redux";
import { SCREEN_TYPES } from "../../../redux_toolkit/miscSlice";
import { renderComplexText } from "../../../utils/misc";

//Types
type ContactMethodProps = {
    method: ContactMethod;
};

//Component of a close button
export default function ContactMethodCard({ method }: ContactMethodProps) {
    const screenType = useSelector(selectScreenType);

    return (
        <StyledMethod>
            <StyledHeader>
                <img src={method.logo} alt="logo" draggable={false} />
                <h2>{renderComplexText(method.name)}</h2>
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
                    {screenType >= SCREEN_TYPES.tablet ? method.cta.name : null}
                    <img
                        src={method.cta.icon}
                        alt={method.cta.name}
                        draggable={false}
                    />
                </a>
            </StyledMain>
        </StyledMethod>
    );
}
