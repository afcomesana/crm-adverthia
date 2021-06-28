import React from 'react';
import './table-header.styles.css';

import columns from '../../data.columns';

const TableHeader = () => (
    <thead>
        <tr>
            {columns.map((item, index) => <th className={`table-header-item ${index !== columns.length - 1 ? 'border-right' : ''}`} key={index} style={{width: item.width}}>{item.headerName}</th>)}
        </tr>
    </thead>
);

export default TableHeader;