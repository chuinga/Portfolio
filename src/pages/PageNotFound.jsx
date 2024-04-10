// Import functionalities
import React from 'react';
import { NavLink } from 'react-router-dom';
// Import translation components
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationPT from '../locales/pt/translation.json';
// Import styles
import '../styles/pageNotFound.css';
// Import images
import blackHole from '../assets/blackHole.png';


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

function PageNotFound() {
  const { t } = useTranslation();

  return (    
      <div className='pageNotFound'>
        <img className='blackHole' src={blackHole} alt="404" />
          <p className='notFound'>{t('404_page')}<span>
            <NavLink to='/'>Homepage</NavLink> </span></p>
                     
      </div>
  );
}

export default PageNotFound;