import React from 'react';
import './BlueButton.scss';

function BlueButton({ title, clicked }) {
    return (
        <React.Fragment>
            {title ? <button className="BlueButton" onClick={clicked}>{title}</button> : null}
        </ React.Fragment>
    )
}

export default BlueButton
