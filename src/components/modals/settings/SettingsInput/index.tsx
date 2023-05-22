//Imports
import React from 'react';
import { StyledSetting, StyledName } from './style';
import { useTranslation } from 'react-i18next';

//Types
type SettingsInputProps = {
    nameId: string;
    buttonTxtId: string;
    onClick: () => void;
};

//Component of a settings input
export default function SettingsInput(props: SettingsInputProps) {
    const { nameId, buttonTxtId, onClick } = props;
    const { t } = useTranslation();

    return (
        <StyledSetting>
            <StyledName>
                <label>{t(nameId)}</label>
                <div />
            </StyledName>
            <button onClick={onClick}>{t(buttonTxtId)}</button>
        </StyledSetting>
    );
}
