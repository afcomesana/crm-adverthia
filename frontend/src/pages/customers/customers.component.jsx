import React, { useEffect } from 'react';
import './customers.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchLeadsStart } from '../../redux/lead/lead.actions';
import { selectCustomers } from '../../redux/lead/lead.selector';

import TableContainer from '../../components/table-container/table-container.component';

const Customers = ({ fetchLeadsStart, leads }) => {
    useEffect(() => fetchLeadsStart(), [fetchLeadsStart]);

    return (
        <div className="customers-page">
            <h1>Clientes</h1>
            <TableContainer data={leads} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    leads: selectCustomers
});

const mapDispatchToProps = dispatch => ({
    fetchLeadsStart: () => dispatch(fetchLeadsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);