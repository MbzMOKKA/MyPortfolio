//Imports
import React from "react";
import { StyledInfo } from "./style";

//Types
type DateInfoProps = {
    children: React.ReactNode;
};

//Component of a date info in a work or skill modal
export default function DateInfo({ children }: DateInfoProps) {
    return <StyledInfo>{children}</StyledInfo>;
}
