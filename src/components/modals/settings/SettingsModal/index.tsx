//Imports
import React from 'react';
import { StyledBackground, StyledModal, StyledSeparator } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { closeSettings, selectSettingsModal } from '../../../../features/modalsSlice';
import CloseButton from '../../../buttons/CloseButton';
import { useTranslation } from 'react-i18next';
import { STRING_IDS } from '../../../../data/locales/stringIds';
import { selectLanguage, setLanguage } from '../../../../features/languageSlice';
import SettingsInput from '../SettingsInput';

//Component of the settings modal
export default function SettingsModal() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { opened } = useSelector(selectSettingsModal);
    const language = useSelector(selectLanguage);
    if (opened === false) {
        return null;
    }

    function changeLanguage() {
        dispatch(setLanguage(language === 'fr' ? 'en' : 'fr'));
    }

    return (
        <StyledBackground>
            <StyledModal>
                <header>
                    <h2>{t(STRING_IDS.settings)}</h2>
                    <CloseButton
                        onClick={() => {
                            dispatch(closeSettings());
                        }}
                    />
                </header>
                <StyledSeparator />
                <section>
                    <SettingsInput nameId={STRING_IDS.language} buttonTxtId={STRING_IDS.changeLanguage} onClick={changeLanguage}></SettingsInput>
                </section>
            </StyledModal>
        </StyledBackground>
    );
}
