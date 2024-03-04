import React from 'react';
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
 
export default Toggle;