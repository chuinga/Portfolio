import { Link } from 'react-router-dom';
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
                <Link to='https://www.linkedin.com/in/miguel-martins-a08a76a5/' target='_blank'>                
                    <img src={Linkedin} alt="Linkedin" />
                </Link>               
                <Link to='https://github.com/chuinga' target='_blank'>               
                    <img src={Github} alt="Github" />
                </Link> 
                <a href="mailto:mfproencamartins@gmail.com?subject=Mail%20from%20miguelmartins.com">
                    <img src={Mail} alt="Mail" />
                </a>   
            </div>
        </div>
     );
}

export default header;