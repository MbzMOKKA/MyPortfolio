//Imports
import React from "react";
import { StyledAttributesOnSmallScreen } from "./style";

//Types
type AttributesOnSmallScreenProps = {
    children: React.ReactNode;
};

//Component of the attributes container of a showcase (on small screens)
export default function AttributesOnSmallScreen({
    children,
}: AttributesOnSmallScreenProps) {
    return (
        <StyledAttributesOnSmallScreen>
            {children}
        </StyledAttributesOnSmallScreen>
    );
}
