import React from 'react';
import './lead-popup-content.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectPopupSection } from '../../redux/lead-popup/lead-popup.selector';

import LeadInfo from '../lead-info/lead-info.component';
import LeadServices from '../lead-services/lead-services.component';
import LeadNotes from '../lead-notes/lead-notes.component';
import LeadRecord from '../lead-record/lead-record.component';

const LeadPopupContent = ({ selectedSection }) => {
    switch (selectedSection) {
        case 'info':
            return <LeadInfo />;
        case 'servicios':
            return <LeadServices />;
        case 'notas':
            return <LeadNotes />;
        case 'historial':
            return <LeadRecord />;
        default:
            return <LeadInfo />;
    }
}

const mapStateToProps = createStructuredSelector({
    selectedSection: selectPopupSection
});

export default connect(mapStateToProps)(LeadPopupContent);