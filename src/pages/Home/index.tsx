//Imports
import React from "react";
import { StyledMain } from "./style";
import {
    CV,
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
            <NaturalFlowCTA url="/work" text="Voir mes travaux" />
            <CareerHistory />
            <NaturalFlowCTA url="/work" text="Voir mes travaux" />
            <QrCode />
            <CV />
            <Version />
        </StyledMain>
    );
}
