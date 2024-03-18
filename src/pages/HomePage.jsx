// Import functionalities
import React from 'react';
// Import translation components
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationPT from '../locales/pt/translation.json';
// Import styles
import '../styles/homePage.css';


const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  pt: {
    translation: translationPT,
  },  
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function body() {
  const { t } = useTranslation();

  return (
    <>
      <div className='content'>
        <p className='blue'>{t('greeting')}</p>
        <h2 className='lightBlue'>Miguel Martins</h2>
        <h2 className='description'>{t('my_title')}</h2>
        <p className='description'>{t('my_description')}</p>
      </div>
    </>
  );
}

export default body;