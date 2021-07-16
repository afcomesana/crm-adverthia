import React from 'react';

import './lead-info-field.styles.css';

import { Select, MenuItem } from '@material-ui/core';

const LeadInfoField = ({ name, value, type, label, handleChange }) => {
    switch (type) {
        case 'select':
            return (
                    <Select className="stage-field" name={name} value={value} onChange={handleChange}>
                        <MenuItem value="candidato">Candidato</MenuItem>
                        <MenuItem value="oportunidad">Oportunidad</MenuItem>
                        <MenuItem value="cliente">Cliente</MenuItem>
                    </Select>
            )
        case 'textarea':
            return (
                <div className="popup-textarea">
                    <textarea name={name} onChange={handleChange} value={value} />
                    <label className={`popup-label${value ? ' shrink' : ''}`}>{label}</label>
                </div>
            )
        case 'date':
            if (name === 'creation_date') {
                return (<div className="popup-input">
                    <p>{value}</p>
                </div>)
            } else {
                return (
                    <div className="popup-input">
                        <input name={name} onChange={handleChange} type={type} value={value} />
                        <label className="popup-label shrink">{label}</label>
                    </div>
                )
            }
        default:
            return (
                <div className="popup-input">
                    <input name={name} onChange={handleChange} type={type} value={value} />
                    <label className={`popup-label${value ? ' shrink' : ''}`}>{label}</label>
                </div>
            );
    }
}

export default LeadInfoField;