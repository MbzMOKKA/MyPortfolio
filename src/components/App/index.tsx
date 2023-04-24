//Imports
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './style';
import Home from '../../pages/Home';
import ErrorNotFound from '../../pages/ErrorNotFound';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../features/language/languageSlice';
import { useSelector } from 'react-redux';

//Component of the web application
export default function App() {
    const { i18n } = useTranslation();
    const language = useSelector(selectLanguage);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    return (
        <StyledAppContainer>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<ErrorNotFound />}></Route>
            </Routes>
        </StyledAppContainer>
    );
}
