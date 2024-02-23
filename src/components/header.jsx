// Import images
import MainLogo from '../assets/mainLogo.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Mail from '../assets/mail.png';
// Import styles
import '../styles/header.css';

function header() {
    return ( 
        <div className='container'>
            <img src={MainLogo} alt="Logo" className='mainLogo'/>
            <div className='social'>
                <img src={Linkedin} alt="Linkedin" />
                <img src={Github} alt="Github" />
                <img src={Mail} alt="Mail" />
            </div>
        </div>
     );
}

export default header;