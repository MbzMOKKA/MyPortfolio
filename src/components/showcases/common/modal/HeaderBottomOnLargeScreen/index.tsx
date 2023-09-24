//Imports
import React from "react";
import { StyledHeaderBottomOnLargeScreen } from "./style";

//Types
type HeaderBottomOnLargeScreenProps = {
    children: React.ReactNode;
};

//Component of the attributes container of a showcase (on small screens)
export default function HeaderBottomOnLargeScreen({
    children,
}: HeaderBottomOnLargeScreenProps) {
    return (
        <StyledHeaderBottomOnLargeScreen>
            {children}
        </StyledHeaderBottomOnLargeScreen>
    );
}
