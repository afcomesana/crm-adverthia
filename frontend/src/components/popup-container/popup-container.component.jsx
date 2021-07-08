import React from 'react';

import './popup-container.styles.css';

import { closeLeadPopup } from '../../redux/lead-popup/lead-popup.actions';

import { connect } from 'react-redux';

const PopupContainer = ({ closeLeadPopup, children }) => {

    return (
        <div className="popup-container">
            <div className="popup">
                <span onClick={closeLeadPopup} className="close-icon">x</span>
                {children}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    closeLeadPopup: () => dispatch(closeLeadPopup())
});

export default connect(null, mapDispatchToProps)(PopupContainer);