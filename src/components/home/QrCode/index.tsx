//Imports
import React from "react";
import { StyledSection } from "./style";
import { qrCode } from "../../../assets/images";

//Component of the portfolio's link QR Code
export default function QrCode() {
    return (
        <StyledSection>
            <p>{`Scanne-moi pour ouvrir le Portfolio sur un autre appareil !`}</p>
            <img src={qrCode} alt="QR code" />
        </StyledSection>
    );
}
