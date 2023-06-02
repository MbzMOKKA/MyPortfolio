//Imports
import React from "react";
import { StyledSection } from "./style";
import { STRING_IDS } from "../../../data";
import { useTranslation } from "react-i18next";
import { qrCode } from "../../../assets/images";

//Component of the portfolio's link QR Code
export default function QrCode() {
    const { t } = useTranslation();

    return (
        <StyledSection>
            <p>{t(STRING_IDS.scanQrCode)}</p>
            <img src={qrCode} alt="close" />
        </StyledSection>
    );
}
