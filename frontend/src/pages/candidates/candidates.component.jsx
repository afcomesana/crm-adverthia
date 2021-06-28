import React, { useEffect } from 'react';
import './candidates.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchLeadsStart } from '../../redux/lead/lead.actions';
import { selectCandidates } from '../../redux/lead/lead.selector';

import TableContainer from '../../components/table-container/table-container.component';

const Candidates = ({ fetchLeadsStart, leads }) => {
    useEffect(() => fetchLeadsStart(), [fetchLeadsStart]);

    return (
        <div className="candidates-page">
            <h1>Candidatos</h1>
            <TableContainer data={leads} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    leads: selectCandidates
});

const mapDispatchToProps = dispatch => ({
    fetchLeadsStart: () => dispatch(fetchLeadsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);