import React from 'react';
import './sidebar.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import DataSources from '../data-sources-list/data-sources.component';
import SidebarClock from '../sidebar-clock/sidebar-clock.component';

const Sidebar = ({ currentUser, signOutStart }) => {
    const { displayName } = currentUser;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Hola, {displayName.split(" ")[0]}</h3>
                <button className="sign-out-button" onClick={signOutStart}>Salir</button>
            </div>
            <DataSources />
            <SidebarClock />
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);