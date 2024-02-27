// Import Styling
import { useTranslation } from 'react-i18next';
import '../styles/sidebar.css';

function sidebar() {
    const { t } = useTranslation();

    return ( 
        <div className='projects'>
            <h2 className='lightBlue'>{t('projects')}</h2>
            <ul>
                <li>Gravity</li>
                <li>Pawsitive Homes</li>
                <li>GrooveGrid</li>
            </ul>
        </div>
     );
}

export default sidebar;