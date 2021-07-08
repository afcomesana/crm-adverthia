import React, { useState } from 'react';
import './lead-popup.styles.css';
import columns from  '../../data.columns';

import { connect } from 'react-redux';

import { selectPopupLead } from '../../redux/lead-popup/lead-popup.selector';
import { updateLeadStart } from '../../redux/lead/lead.actions';
import { createStructuredSelector } from 'reselect';

import PopupField from '../popup-field/popup-field.component';
import SaveButton from '../save-button/save-button.component';

const LeadPopup = ({ lead, updateLeadStart }) => {
    const [popupFields, setPopupFields] = useState(lead);

    const handleChange = event => {
        const { name, value } = event.target;
        setPopupFields({
            ...popupFields,
            [name]: value
        });
    }

    return (
        <div className="lead-popup">
            <ul>
                {Object.keys(popupFields).map((field, index) => field !== 'id' ? <PopupField key={index} handleChange={handleChange} type={columns.filter(col => col.field === field)[0].type} name={field} value={popupFields[field]} label={columns.filter(col => col.field === field)[0].headerName} /> : null)}
            </ul>
            <SaveButton handleClick={() => popupFields !== lead ? updateLeadStart(popupFields) : alert("No ha habido ningún cambio")} />
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    lead: selectPopupLead
});

const mapDispatchToProps = dispatch => ({
    updateLeadStart: lead => dispatch(updateLeadStart(lead))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeadPopup);