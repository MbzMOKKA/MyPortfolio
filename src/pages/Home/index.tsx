//Imports
import React from "react";
import { StyledMain } from "./style";
import {
    CareerHistory,
    Presentation,
    QrCode,
    Version,
} from "../../components/home";

//Component of the home page
export default function HomePage() {
    return (
        <StyledMain>
            <Presentation />
            <CareerHistory />
            <QrCode />
            <Version />
        </StyledMain>
    );
}
