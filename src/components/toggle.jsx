// Import functionalities
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