import React from 'react';
// Import styles
import '../styles/toggle.css';
// Import images
import day from '../assets/Light1.png';
import night from '../assets/Light5.png';

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className='toggleContainer' onClick={handleChange}>
            <img
                src={day}
                alt="Bright"
                className='toggle'
                style={{ opacity: isChecked ? 0 : 1 }}
            />
            <img
                src={night}
                alt="Dark"
                className='toggle'
                style={{ opacity: isChecked ? 1 : 0 }}
            />
        </div>
    );
};

export default Toggle;

/* import React from 'react';
// Import styles
import '../styles/toggle.css';
// Import images
import lighta from '../assets/Light1.png';
import lightb from '../assets/Light2.png';
import lightc from '../assets/Light3.png';
import lightd from '../assets/Light4.png';
import lighte from '../assets/Light5.png';

const Toggle = ({ handleChange, isChecked }) => {
    // Corrected ternary operation to choose between images
    const toggleImg = isChecked ? lighte : lighta;

    return ( 
        <div className='toggleContainer'>
            <img 
                src={toggleImg} 
                alt="toggle" 
                className='toggle'
                onClick={handleChange}/>
        </div>        
     );
}

export default Toggle; */

/* import React from 'react';
// Import styles
import '../styles/toggle.css';

const Toggle = ({ handleChange, isChecked }) => {
    return ( 
        <div className='toggleContainer'>
            <input 
                type="checkbox" 
                id='check' 
                className='toggle' 
                onChange={handleChange} 
                checked={isChecked} 
            />
            <label htmlFor="check"></label>
        </div>        
     );
}
 
export default Toggle; */