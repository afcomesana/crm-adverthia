import React from 'react';
import './data-source-item.styles.css';

import { Link, useLocation } from 'react-router-dom';

const DataSourceItem = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <Link className={`data-source-item ${children.toLowerCase() === pathname.slice(1) ? 'selected' : ''}`} to={`/${children.toLowerCase()}`}>{children}</Link>
    );
}
export default DataSourceItem;