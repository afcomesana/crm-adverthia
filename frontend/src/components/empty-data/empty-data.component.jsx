import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import './empty-data.styles.css';

const EmptyData = ({ children }) => (
    <div className="empty-data">
        <div className="icon-text-container">
            <FontAwesomeIcon className="empty-folder-icon" icon={faFolderOpen} />
            <h2>Todavía no hay {children}</h2>
        </div>
    </div>
    
);

export default EmptyData;