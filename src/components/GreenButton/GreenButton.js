import React from 'react';
import './GreenButton.scss';

function GreenButton({ title, clicked }) {
    return (
        <React.Fragment>
            {title ? <button className="GreenButton" onClick={clicked}>{title}</button> : null}
        </ React.Fragment>
    )
}

export default GreenButton
