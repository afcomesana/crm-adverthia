import React, { useEffect } from 'react';
import './leads.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchLeadsStart } from '../../redux/lead/lead.actions';
import { selectLeads } from '../../redux/lead/lead.selector';

import TableContainer from '../../components/table-container/table-container.component';

const Leads = ({ fetchLeadsStart, leads, location }) => {
    useEffect(() => fetchLeadsStart(), [fetchLeadsStart]);

    return (
        <div className="leads">
            <h1>OPORTUNIDADES</h1>
            <TableContainer data={leads} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    leads: selectLeads
});

const mapDispatchToProps = dispatch => ({
    fetchLeadsStart: () => dispatch(fetchLeadsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);