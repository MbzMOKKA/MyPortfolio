//Imports
import React from "react";
import { StyledMain } from "./style";
import {
    CareerHistory,
    Presentation,
    QrCode,
    Version,
} from "../../components/home";
import { NaturalFlowCTA } from "../../components/other";

//Component of the home page
export default function HomePage() {
    return (
        <StyledMain>
            <Presentation />
            <CareerHistory />
            <NaturalFlowCTA url="/work" text="Voir mes travaux" />
            <QrCode />
            <Version />
        </StyledMain>
    );
}
