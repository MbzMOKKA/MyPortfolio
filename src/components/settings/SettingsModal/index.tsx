//Imports
import React, { useEffect, useState } from "react";
import {
    StyledBackground,
    StyledLanguageOption,
    StyledModal,
    StyledSeparator,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { closeSettings, selectSettingsModal } from "../../../features";
import { CloseButton } from "../../other";
import { useTranslation } from "react-i18next";
import { LANG, STRING_IDS } from "../../../data/locales/stringIds";
import { selectLanguage, setLanguage } from "../../../features";
import { SettingsInput } from "../";

//Component of the settings modal
export default function SettingsModal() {
    const [rendered, setRendered] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { opened } = useSelector(selectSettingsModal);
    const language = useSelector(selectLanguage);

    useEffect(() => {
        if (opened) {
            setRendered(true);
        }
    }, [opened]);

    if (rendered === false) {
        return null;
    }

    function setLanguageToFrench() {
        dispatch(setLanguage(LANG.fr));
    }
    function setLanguageToEnglish() {
        dispatch(setLanguage(LANG.en));
    }

    return (
        <StyledBackground
            className={`${opened ? "shown" : "hidden"}`}
            onAnimationEnd={(e) => {
                if (e.animationName === "modalBgDisappear") {
                    setRendered(false);
                }
            }}
        >
            <StyledModal className={`${opened ? "shown" : "hidden"}`}>
                <header>
                    <h2>{t(STRING_IDS.settings)}</h2>
                    <CloseButton
                        onClick={() => {
                            dispatch(closeSettings());
                        }}
                    />
                </header>
                <StyledSeparator />
                <main>
                    <SettingsInput nameId={STRING_IDS.language}>
                        <StyledLanguageOption
                            className="option"
                            onClick={setLanguageToEnglish}
                            selected={language === LANG.en}
                        >
                            {t(STRING_IDS.english)}
                        </StyledLanguageOption>
                        <StyledLanguageOption
                            className="option"
                            onClick={setLanguageToFrench}
                            selected={language === LANG.fr}
                        >
                            {t(STRING_IDS.french)}
                        </StyledLanguageOption>
                    </SettingsInput>
                </main>
            </StyledModal>
        </StyledBackground>
    );
}
