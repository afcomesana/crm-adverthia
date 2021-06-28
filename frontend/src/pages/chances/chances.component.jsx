import React, { useEffect } from 'react';
import './chances.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchLeadsStart } from '../../redux/lead/lead.actions';
import { selectChances } from '../../redux/lead/lead.selector';

import TableContainer from '../../components/table-container/table-container.component';

const Chances = ({ fetchLeadsStart, leads }) => {
    useEffect(() => fetchLeadsStart(), [fetchLeadsStart]);

    return (
        <div className="chances-page">
            <h1>Oportunidades</h1>
            <TableContainer data={leads} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    leads: selectChances
});

const mapDispatchToProps = dispatch => ({
    fetchLeadsStart: () => dispatch(fetchLeadsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chances);