import React from 'react';
import './XButton.scss';

function XButton({ clicked }) {
    return (
        <button className="XButton" onClick={clicked}>X</button>
    )
}

export default XButton;
