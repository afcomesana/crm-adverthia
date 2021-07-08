import React from 'react';
import './table-header.styles.css';

import columns from '../../data.columns';

const TableHeader = () => {
    const displayedFields = columns.filter(col => col.width);
    return (
        <thead>
            <tr>
                {displayedFields.map((item, index) => <th className={`table-header-item ${index !== displayedFields.length - 1 ? 'border-right' : ''}`} key={index} style={{width: item.width}}>{item.headerName}</th>)}
            </tr>
        </thead>
    );
}
export default TableHeader;