import { Locales } from 'src/libs/i18n/interfaces';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const registerLocales = (locales: Locales): void => {
  const { en } = locales;

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      resources: { en: { translation: en } },
    });
};
