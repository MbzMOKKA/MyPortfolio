//Imports
import React, { useEffect, useState } from "react";
import { StyledBackground, StyledLanguageOption, StyledModal } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { closeSettings, selectSettingsModal } from "../../../redux_toolkit";
import { AreaSeparator, CloseButton } from "../../other";
import { LANG, STRING_IDS } from "../../../data/locales/stringIds";
import { selectLanguage, setLanguage } from "../../../redux_toolkit";
import { SettingsInput } from "../";
import { AREA_SEPARATOR_TYPES } from "../../other/AreaSeparator";
import { useText } from "../../../utils/hooks";

//Component of the settings modal
export default function SettingsModal() {
    const [rendered, setRendered] = useState(false);
    const { renderComplexText } = useText();
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
                    <h2>{renderComplexText(STRING_IDS.settings)}</h2>
                    <CloseButton
                        onClick={() => {
                            dispatch(closeSettings());
                        }}
                    />
                </header>
                <AreaSeparator type={AREA_SEPARATOR_TYPES.modalHeader} />
                <main>
                    <SettingsInput nameId={STRING_IDS.language}>
                        <StyledLanguageOption
                            className="option"
                            onClick={setLanguageToEnglish}
                            selected={language === LANG.en}
                        >
                            {renderComplexText(STRING_IDS.english)}
                        </StyledLanguageOption>
                        <StyledLanguageOption
                            className="option"
                            onClick={setLanguageToFrench}
                            selected={language === LANG.fr}
                        >
                            {renderComplexText(STRING_IDS.french)}
                        </StyledLanguageOption>
                    </SettingsInput>
                </main>
            </StyledModal>
        </StyledBackground>
    );
}
