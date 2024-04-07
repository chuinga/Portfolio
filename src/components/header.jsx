// Import functionalities and components
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import images
import MainLogo from '../assets/mainLogo.webp';
import LinkedinIcon from '../assets/linkedin.png';
import GithubIcon from '../assets/github.png';
import MailIcon from '../assets/mail.png';
// Import styles
import '../styles/header.css';


function header() {
    return ( 
        <div className='container'>
            <NavLink to='/'>
                <img src={MainLogo} alt='Logo' className='mainLogo'/>
            </NavLink>
            
            <div className='social'>
                <Link to='https://www.linkedin.com/in/miguel-martins-a08a76a5/' 
                target='_blank'>                
                    <img src={LinkedinIcon} alt='Linkedin' />
                </Link>               
                <Link to='https://github.com/chuinga' 
                target='_blank'>               
                    <img src={GithubIcon} alt='Github' />
                </Link>                 
                {<a href='mailto:contact@mfpmartins.dev?subject=Mail%20from%20mfpmartins.dev'>
                    <img src={MailIcon} alt='Mail' />
                </a>}  
            </div>
        </div>
     );
}

export default header;