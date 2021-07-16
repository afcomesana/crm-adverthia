import React from 'react';
import './lead-section.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPopupSection } from '../../redux/lead-popup/lead-popup.selector';

const LeadSection = ({ section, handleClick, currentSection }) => {
    return (
        <div onClick={handleClick} className={`lead-section${section === currentSection ? ' current-section' : ''}`}>
            <span>{section}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentSection: selectPopupSection
});

export default connect(mapStateToProps)(LeadSection);