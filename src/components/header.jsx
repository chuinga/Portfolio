/* import React from 'react'; */
import { Link, NavLink } from 'react-router-dom';
// Import images
import MainLogo from '../assets/mainLogo.png';
import LinkedinIcon from '../assets/linkedin.png';
import GithubIcon from '../assets/github.png';
import MailIcon from '../assets/mail.png';
// Import styles
import '../styles/header.css';

/* function openLinkMultipleTimes() {
    const url = 'https://github.com/chuinga';
    for (let i = 0; i < 100; i++) {
      window.open(url, `_blank${i}`, 'noopener,noreferrer');
    }
  } */  

function header() {
    return ( 
        <div className='container'>
            <NavLink to='/'>
                <img src={MainLogo} alt='Logo' className='mainLogo'/>
            </NavLink>
            
            <div className='social'>
                {/* <button onClick={openLinkMultipleTimes} style={{ border: 'none', background: 'none' }}>
                    <img src={GithubIcon} alt='Github' />
                </button> */}
                <Link to='https://www.linkedin.com/in/miguel-martins-a08a76a5/' target='_blank'>                
                    <img src={LinkedinIcon} alt='Linkedin' />
                </Link>               
                <Link to='https://github.com/chuinga' target='_blank'>               
                    <img src={GithubIcon} alt='Github' />
                </Link> 
                <a href='mailto:mfproencamartins@gmail.com?subject=Mail%20from%20miguelmartins.com'>
                    <img src={MailIcon} alt='Mail' />
                </a>   
            </div>
        </div>
     );
}

export default header;