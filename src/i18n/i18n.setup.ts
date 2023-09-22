import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translations } from "./translations.enum";

import en_US_login from "./locales/en_US/login.json";
import en_US_layout from "./locales/en_US/app/layout.json";
import en_US_common from "./locales/en_US/common.json";
import en_US_physical_profile from "./locales/en_US/physical-profile/physical-profile.json";
import { Language } from "@tmw-universe/tmw-universe-types";

const resources = {
  [Language.en_US]: {
    [Translations.login]: en_US_login,
    [Translations.layout]: en_US_layout,
    [Translations.common]: en_US_common,
    [Translations.physicalProfile]: en_US_physical_profile,
  },
};

export const i18nsetup = () => {
  i18n.use(LanguageDetector).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Language.en_US,
    debug: true,
    resources,
  });
};
