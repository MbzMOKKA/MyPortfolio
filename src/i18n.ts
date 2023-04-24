//Imports
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './data/locales/en/translation.json';
import frTranslation from './data/locales/fr/translation.json';

//Setup
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation,
        },
        fr: {
            translation: frTranslation,
        },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
