import React from 'react';
import './table-body.styles.css';

import TableRow from '../table-row/table-row.component';

const TableBody = ({ data }) => {    
    return (
        <tbody>
                {data.map((item, index) => <TableRow key={index} index={index} dataRow={item} />)}
        </tbody>
    )
}

export default TableBody;