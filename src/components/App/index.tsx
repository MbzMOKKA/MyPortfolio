//Imports
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    selectLanguage,
    selectSettingsLoaded,
    selectSettings,
    localStorageLoaded,
} from "../../features";
import { useDispatch, useSelector } from "react-redux";
import { ContentModal } from "../content";
import { SettingsButton, SettingsModal } from "../settings";
import {
    HomePage,
    ErrorNotFoundPage,
    WorksPage,
    ContactPage,
} from "../../pages";
import { StyledBackground } from "./style";
import { NavBar } from "../navigation";

//Component of the web application
export default function App() {
    const { i18n } = useTranslation();
    const settings = useSelector(selectSettings);
    const settingsLoaded = useSelector(selectSettingsLoaded);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    //applying new language
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    //loading settings
    useEffect(() => {
        if (settingsLoaded === false) {
            const settingsInStorage = localStorage.getItem("settings");
            if (settingsInStorage !== null) {
                dispatch(localStorageLoaded(settingsInStorage));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //saving settings
    useEffect(() => {
        if (settingsLoaded) {
            let settingsCopy = { ...settings };
            delete settingsCopy.loaded;
            localStorage.setItem("settings", JSON.stringify(settingsCopy));
        }
    }, [settingsLoaded, settings]);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/work/:id?" element={<WorksPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="*" element={<ErrorNotFoundPage />}></Route>
            </Routes>
            <SettingsButton />
            <NavBar />
            <SettingsModal />
            <ContentModal />
            <StyledBackground />
        </>
    );
}
