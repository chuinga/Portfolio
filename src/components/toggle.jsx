import React from 'react';
// Import styles
import '../styles/toogle.css';

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
            <label htmlFor="check">Dark Mode</label>
        </div>        
     );
}
 
export default Toggle;