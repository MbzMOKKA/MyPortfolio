//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRINGS } from "../../../data";
import { qrCode } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the portfolio's link QR Code
export default function QrCode() {
    const { renderComplexText } = useText();

    return (
        <StyledSection>
            <p>{renderComplexText(STRINGS.scanQrCode)}</p>
            <img src={qrCode} alt="QR code" />
        </StyledSection>
    );
}
