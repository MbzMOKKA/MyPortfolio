//Imports
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from '../../features/languageSlice';

//Component of the homepage
export default function Home() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);

    function changeLanguage() {
        dispatch(setLanguage(language === 'fr' ? 'en' : 'fr'));
    }

    return (
        <main>
            <p>{t('welcome')}</p>
            <p>{window.innerWidth}</p>
            <button onClick={changeLanguage}>{t('changeLanguage')}</button>
        </main>
    );
}
