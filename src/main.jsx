import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_es from "./languages/es/global.json"
import global_en from "./languages/en/global.json"



const languageDetector = new LanguageDetector(
  {
    lookupQuerystring: true,
    lookuplocalStorage: true,
    nonExplicitSupportedLngs: true
  }
);

const currentLanguage = i18next.language;
console.log(currentLanguage)
i18next.use(languageDetector);
i18next.init({
  supportedLngs: ['en', 'es'],
  interpolation: {escapeValue: false},
  lng: currentLanguage,
  fallbackLng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    
  </React.StrictMode>,
)
