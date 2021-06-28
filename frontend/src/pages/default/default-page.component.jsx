import React from 'react';
import './default-page.styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DefaultPage = () => (
    <div className="default-page">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
    </div>
);

export default DefaultPage;