// Import functionalities and components
import React from 'react';
import { NavLink } from 'react-router-dom';
// Import styles
import { useTranslation } from 'react-i18next';
import '../styles/sidebar.css';


function Sidebar() {
    const { t } = useTranslation();

    return ( 
        <div className='projects'>
            <h2 className='lightBlue'>{t('projects')}</h2>
            <ul>
                <li><NavLink to='/project/groovegrid'>GrooveGrid</NavLink></li> {/* Links hover style unfinished */}
                <li><NavLink to='/project/pawsitivehomes'>Pawsitive Homes</NavLink></li> {/* Links hover style unfinished */}
                <li><NavLink to='/project/gravity'>Gravity</NavLink></li> {/* Links hover style unfinished */}
            </ul>
        </div>
    );
}

export default Sidebar;