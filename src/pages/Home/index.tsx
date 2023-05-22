//Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

//Component of the homepage
export default function Home() {
    const { t } = useTranslation();

    return (
        <main>
            <p>{t('welcome')}</p>
            <p>{window.innerWidth}</p>
        </main>
    );
}
