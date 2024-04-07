// Import functionalities and hooks
import React, { useState } from 'react';
// Import translation components
import { useTranslation } from 'react-i18next';
// Import images
import En from '../assets/en.png';
import Es from '../assets/es.png';
import Fr from '../assets/fr.png';
import Pt from '../assets/pt.png';
// Import styles
import '../styles/footer.css'
// Import components
import Toggle from '../components/toggle';


function footer({ isDark, toggleDarkMode }) {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    
    const handleLanguageChange = (newLang) => {
        i18n.changeLanguage(newLang);
        setSelectedLanguage(newLang);
    }

    const isSelected = (lang) => selectedLanguage === lang;

    return ( 
        <div className='footer'>
            <div className='lang'>
                <img src={En} alt='English' className={`langIcon ${isSelected('en') ? 'selected' : ''}`} onClick={() => handleLanguageChange('en')} />
                <img src={Es} alt='Español' className={`langIcon ${isSelected('es') ? 'selected' : ''}`} onClick={() => handleLanguageChange('es')} />
                <img src={Fr} alt='Français' className={`langIcon ${isSelected('fr') ? 'selected' : ''}`} onClick={() => handleLanguageChange('fr')} />
                <img src={Pt} alt='Português' className={`langIcon ${isSelected('pt') ? 'selected' : ''}`} onClick={() => handleLanguageChange('pt')} />
            </div>
            {<p>©{new Date().getFullYear()} mfpmartins.dev</p>}
            <Toggle isChecked={isDark} handleChange={toggleDarkMode} />
        </div>        
);        
}

export default footer;