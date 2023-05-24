//Imports
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "../../features";
import { useSelector } from "react-redux";
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
    const language = useSelector(selectLanguage);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

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
