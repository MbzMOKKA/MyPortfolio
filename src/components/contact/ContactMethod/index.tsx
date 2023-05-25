//Imports
import React from "react";
import { StyledMethod } from "./style";
import { useTranslation } from "react-i18next";

//Types
type ContactMethodProps = {
    nameId: string;
};

//Component of a close button
export default function ContactMethod(props: ContactMethodProps) {
    const { nameId } = props;
    const { t } = useTranslation();

    return <StyledMethod>{t(nameId)}</StyledMethod>;
}
