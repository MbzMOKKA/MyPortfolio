//Imports
import React from "react";
import CareerStep from "../CareerStep";
import { StyledSection } from "./style";

//Component of the career section in the home page
export default function CareerHistory() {
    return (
        <StyledSection>
            <p>Career history</p>
            <CareerStep />
            <CareerStep />
            <CareerStep />
            <CareerStep />
            <CareerStep />
        </StyledSection>
    );
}
