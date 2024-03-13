import React from 'react';
// Import styles
import '../styles/toggle.css';
// Import images
import claro from '../assets/Light1.png';
import escuro from '../assets/Light5.png';

const Toggle = ({ handleChange, isChecked }) => {
    // Corrected ternary operation to choose between images
    const toggleImg = isChecked ? claro : escuro;

    return ( 
        <div className='toggleContainer'>
            <input 
                type="checkbox" 
                id='check' 
                className='toggle' 
                onChange={handleChange} 
                checked={isChecked} 
            />
            {/* Updated img tag to use toggleImg for the src attribute */}
            <img src={toggleImg} alt="toggle" 
                onClick={handleChange}/>
            <label htmlFor="check"></label>
        </div>        
     );
}

export default Toggle;

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