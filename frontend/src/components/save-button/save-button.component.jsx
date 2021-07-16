import React from 'react';

import './save-button.styles.css';

const SaveButton = ({ handleClick, children }) => (
    <button className="save-button" onClick={handleClick}>{children}</button>
)

export default SaveButton;