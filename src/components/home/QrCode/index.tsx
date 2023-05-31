//Imports
import React from "react";
import { StyledSection } from "./style";
import qrCode from "../../../assets/images/portfolio_qr_code.png";
import { STRING_IDS } from "../../../data";
import { useTranslation } from "react-i18next";

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
