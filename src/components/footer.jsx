// Import React, useState and useTranslation hook
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
// Import images
import En from '../assets/en.png';
import Es from '../assets/es.png';
import Fr from '../assets/fr.png';
import Pt from '../assets/pt.png';
// Import styles
import '../styles/footer.css'

function footer() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('');
    
    const handleLanguageChange = (newLang) => {
        i18n.changeLanguage(newLang);
        setSelectedLanguage(newLang);
    }

    const isSelected = (lang) => selectedLanguage === lang;

    return ( 
        <div className='lang'>
            <img src={En} alt="English" className={`langIcon ${isSelected('en') ? 'selected' : ''}`} onClick={() => handleLanguageChange('en')} />
            <img src={Es} alt="Español" className={`langIcon ${isSelected('es') ? 'selected' : ''}`} onClick={() => handleLanguageChange('es')} />
            <img src={Fr} alt="Français" className={`langIcon ${isSelected('fr') ? 'selected' : ''}`} onClick={() => handleLanguageChange('fr')} />
            <img src={Pt} alt="Português" className={`langIcon ${isSelected('pt') ? 'selected' : ''}`} onClick={() => handleLanguageChange('pt')} />     
        </div>
);        
}

export default footer;