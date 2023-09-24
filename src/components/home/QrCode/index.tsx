//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../data";
import { qrCode } from "../../../assets/images";
import { useText } from "../../../utils/hooks";

//Component of the portfolio's link QR Code
export default function QrCode() {
    const { renderComplexText } = useText();

    return (
        <StyledSection>
            <p>{renderComplexText(STRING_IDS.scanQrCode)}</p>
            <img src={qrCode} alt="QR code" />
        </StyledSection>
    );
}
