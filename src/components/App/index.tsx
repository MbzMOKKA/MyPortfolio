//Imports
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { setScreenType } from "../../redux_toolkit";
import { useDispatch } from "react-redux";
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

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work/:id?" element={<WorksPage />} />
                <Route path="/skill/:id?" element={<SkillsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<ErrorNotFoundPage />} />
            </Routes>
            <NavBar />
            <ScrollToTopButton />
            <StyledBackground />
        </>
    );
}
