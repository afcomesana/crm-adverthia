import React from 'react';
import './lead-popup-header.styles.css';

import LeadSection from '../lead-section/lead-section.component';

import { connect } from 'react-redux';

import { changePopupSection } from '../../redux/lead-popup/lead-popup.actions';


const popupSections = {
    info: 'info',
    servicios: 'servicios',
    notas: 'notas',
    historial: 'historial'
};

const LeadPopupHeader = ({ changeSection }) => {
    return (
        <div className="lead-popup-header">
            {Object.keys(popupSections).map((section, index) => <LeadSection key={index}  handleClick={() => changeSection(popupSections[section])} section={popupSections[section]} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    changeSection: section => dispatch(changePopupSection(section))
});

export default connect(null, mapDispatchToProps)(LeadPopupHeader);