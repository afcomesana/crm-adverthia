import React from 'react';

import './table-row.styles.css';
import columns from '../../data.columns';

import StageField from '../stage-field/stage-field.component';

import { openLeadPopup } from '../../redux/lead-popup/lead-popup.actions';

import { connect } from 'react-redux';


const TableRow = ({ dataRow, index, openLeadPopup }) => {
    const displayedFields = columns.filter(col => col.width);
    return (
        <tr 
            onClick={() => openLeadPopup(dataRow)} 
            className={`table-row ${index % 2 ? '' : 'dark'}`}
        >
            {displayedFields.map((column, columnIndex) => <td className={`table-row-item${columnIndex !== displayedFields.length - 1 ? ' border-right' : ''}`} key={columnIndex}>{dataRow[column.field]}</td>)}
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    openLeadPopup: lead => dispatch(openLeadPopup(lead))
});

export default connect(null, mapDispatchToProps)(TableRow);