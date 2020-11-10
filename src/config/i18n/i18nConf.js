import i18n from 'i18next'
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next'
import enTranslation from './locale/en.json'
import esTranslation from './locale/es.json'

// TODO: read language from settings storage before app startup

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    })