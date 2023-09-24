//Imports
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    selectLanguage,
    selectSettingsLoaded,
    selectSettings,
    localStorageLoad,
    localStorageLoaded,
    setScreenType,
} from "../../redux_toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
    HomePage,
    ErrorNotFoundPage,
    WorksPage,
    ContactPage,
    SkillsPage,
} from "../../pages";
import { StyledBackground } from "./style";
import { NavBar } from "../navigation";
import { getUrlMainPath, screenWidthGetType } from "../../utils/misc";
import { ScrollToTopButton } from "../other";

//Component of the web application
export default function App() {
    const { pathname } = useLocation();
    const [previousMainPath, setPreviousMainPath] = useState(pathname);
    const { i18n } = useTranslation();
    const settings = useSelector(selectSettings);
    const settingsLoaded = useSelector(selectSettingsLoaded);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    //Determining if the user in on mobile/tablet or laptop/desktop
    useEffect(() => {
        const handleResize = () => {
            dispatch(setScreenType(screenWidthGetType(window.innerWidth)));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Scrolling to the top when the main route changes
    useEffect(() => {
        const newMainPath = getUrlMainPath(pathname);
        if (newMainPath !== previousMainPath) {
            setPreviousMainPath(newMainPath);
            window.scrollTo(0, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <Route path="/skill/:id?" element={<SkillsPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="*" element={<ErrorNotFoundPage />}></Route>
            </Routes>
            {/* <SettingsButton /> */}
            <NavBar />
            <ScrollToTopButton />
            {/* <SettingsModal /> */}
            <StyledBackground />
        </>
    );
}
