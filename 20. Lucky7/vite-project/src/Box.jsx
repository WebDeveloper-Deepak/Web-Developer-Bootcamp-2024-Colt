import { useState } from 'react';
import './Box.css'

function Box({ isActive, toggleBox }) {

    return (
        <div
            onClick={toggleBox}
            className="Box"
            style={{ backgroundColor: isActive ? 'red' : 'black' }}
        >

        </div>
    )
};

export default Box;