//Imports
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    selectLanguage,
    selectSettingsLoaded,
    selectSettings,
    localStorageLoad,
    localStorageLoaded,
} from "../../redux_toolkit";
import { useDispatch, useSelector } from "react-redux";
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
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    //applying new language
    useEffect(() => {
        i18n.changeLanguage(language);
        document.documentElement.lang = language;
    }, [i18n, language]);

    //loading settings
    useEffect(() => {
        if (settingsLoaded === false) {
            const settingsInStorage = localStorage.getItem("settings");
            if (settingsInStorage !== null) {
                dispatch(localStorageLoad(settingsInStorage));
            }
            dispatch(localStorageLoaded());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //saving settings
    useEffect(() => {
        if (settingsLoaded) {
            let savedSettings = { ...settings };
            delete savedSettings.loaded;
            localStorage.setItem("settings", JSON.stringify(savedSettings));
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
            <StyledBackground />
        </>
    );
}
