import React from 'react';
import { useParams } from 'react-router-dom';
// Import translation
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationPT from '../locales/pt/translation.json';
// Import styling
import '../styles/project.css';

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

function project() {
  const { t } = useTranslation();
  const { projectName } = useParams();
  const translationKey = `${projectName}_description`;

  const projectTitles = {
    gravity: 'Gravity',
    pawsitivehomes: 'Pawsitive Homes',
    groovegrid: 'GrooveGrid'
  };
  const title = projectTitles[projectName] || 'Project not found'

  return (
    <>
      <div className='content'>
        <h2 className='blue'>{title}</h2>
        <p className='projectDescription'>{t(translationKey)}</p>
      </div>
    </>
  );
}

export default project;