import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import './empty-leads.styles.css';

const EmptyLeads = () => (
    <div className="empty-leads-page">
        <div className="icon-text-container">
            <FontAwesomeIcon className="empty-folder-icon" icon={faFolderOpen} />
            <h2>Todavía no hay {window.location.pathname.slice(1)}</h2>
        </div>
    </div>
    
);

export default EmptyLeads;