//Imports
import React from "react";
import { StyledSetting, StyledName } from "./style";
import { useTranslation } from "react-i18next";

//Types
type SettingsInputProps = {
    nameId: string;
    children: any;
};

//Component of a settings input
export default function SettingsInput(props: SettingsInputProps) {
    const { nameId, children } = props;
    const { t } = useTranslation();

    return (
        <StyledSetting>
            <StyledName>
                <label>{t(nameId)}</label>
                <div />
            </StyledName>
            {children}
        </StyledSetting>
    );
}
