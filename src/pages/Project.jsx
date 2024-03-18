import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Import translation components
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationPT from '../locales/pt/translation.json';
// Import styles
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
  const title = projectTitles[projectName] || 'Project not found';

  const projectSite = {
    gravity: 'https://gravitygame.netlify.app/',
    pawsitivehomes: 'https://main--pawsitivehomes.netlify.app/',
    groovegrid: 'https://groovegrid.netlify.app/'
  };
  const site = projectSite[projectName];

  const projectGithub = {
    gravity: 'https://github.com/chuinga/Project-Gravity-Game',
    pawsitivehomes: 'https://github.com/Ksfraan/Pawsitive-Homes',
    groovegrid: 'https://github.com/chuinga/GrooveGrid'
  };
  const github = projectGithub[projectName];

  return (    
    <div className='content'>
      <h2 className='blue'>{title}</h2>
      <p className='projectDescription'>{t(translationKey)}</p>
      <div className='projectLinks'>
        <Link to={site} target='_blank' className='links'>Site</Link>
        <Link to={github} target='_blank' className='links'>Github</Link>
      </div>
    </div>    
  );
}

export default project;