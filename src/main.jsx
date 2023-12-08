import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_es from "./languages/es/global.json"
import global_en from "./languages/en/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
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
