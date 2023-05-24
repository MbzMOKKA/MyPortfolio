//Imports
import React from "react";
import { StyledMethod } from "./style";

//Types
type ContactMethodProps = {
    nameId: string;
};

//Component of a close button
export default function ContactMethod(props: ContactMethodProps) {
    const { nameId } = props;

    return <StyledMethod>{nameId}</StyledMethod>;
}
