import React from 'react';
import './notes-container.styles.css';

import EmptyData from '../empty-data/empty-data.component';
import { SpinnerOverlay, SpinnerContainer } from '../spinner/spinner.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectNotes } from '../../redux/record/record.selector';

const NotesContainer = ({ notes }) => {
    return (
        <div className="notes-container">
            {!notes ? <SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>
            : notes.length ? <span>notas</span> : <EmptyData>notas</EmptyData>}
        </div>
    )
    //     return (
    //         <SpinnerOverlay>
    //             <SpinnerContainer />
    //         </SpinnerOverlay>
    //     );
    // } else {
    //     return notes.length ? <span>notas</span> : <EmptyData>notas</EmptyData> ;
    // }
}

const mapStateToProps = createStructuredSelector({
    notes: selectNotes
});

export default connect(mapStateToProps)(NotesContainer);