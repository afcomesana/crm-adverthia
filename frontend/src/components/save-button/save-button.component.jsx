import React from 'react';

import './save-button.styles.css';

const SaveButton = ({ handleClick }) => (
    <button className="save-button" onClick={handleClick}>Guardar</button>
)

export default SaveButton;