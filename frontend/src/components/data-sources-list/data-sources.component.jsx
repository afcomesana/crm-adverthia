import React from 'react';
import './data-sources.styles.css';

import { useLocation } from 'react-router-dom';

import DataSourceItem from '../data-source-item/data-source-item.component.jsx';

const DataSources = () => {
    return (
        <div className="data-sources-list">
            <DataSourceItem>Candidatos</DataSourceItem>
            <DataSourceItem>Oportunidades</DataSourceItem>
            <DataSourceItem>Clientes</DataSourceItem>
        </div>
    );
}
export default DataSources;