import React from 'react';

import './table-row.styles.css';

import columns from '../../data.columns';

import StageField from '../stage-field/stage-field.component';

const TableRow = ({ dataRow, index }) => {
    return (
        <tr className={`table-row ${index % 2 ? '' : 'dark'}`}>
            {columns.map((column, columnIndex) =>
                column.field === 'stage' ? 
                <td className="table-row-item"><StageField index={index} id={dataRow['id']} stage={dataRow['stage']} /></td> :
                <td className="table-row-item border-right" key={columnIndex}>{dataRow[column.field]}</td>
            )}
        </tr>
    )
}

export default TableRow;