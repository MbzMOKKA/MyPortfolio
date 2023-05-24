//Imports
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations, frTranslations } from "./data";
import { LANG } from "./data/locales/stringIds";

//Setup
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        fr: {
            translation: frTranslations,
        },
    },
    lng: LANG.en,
    fallbackLng: LANG.en,

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
