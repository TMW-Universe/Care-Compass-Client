import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Languages } from "./languages.enum";

import en_US_login from "./locales/en_US/login.json";
import { Translations } from "./translations.enum";

const resources = {
  [Languages.en_US]: {
    [Translations.login]: en_US_login,
  },
};

export const i18nsetup = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Languages.en_US,
    debug: true,
    resources,
  });
};
