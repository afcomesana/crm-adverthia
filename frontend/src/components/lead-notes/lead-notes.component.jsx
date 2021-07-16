import React, { useState, useEffect } from 'react';
import './lead-notes.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { selectPopupLead } from '../../redux/lead-popup/lead-popup.selector';
import { fetchNotesStart } from '../../redux/record/record.actions';

import NotesContainer from '../notes-container/notes-container.component';
import NoteField from '../note-field/note-field.component';


const LeadNotes = ({ lead, fetchNotesStart }) => {
    useEffect(() => fetchNotesStart(lead.lead_id), [fetchNotesStart]);

    const [displayedNoteField, setDisplayedNoteField] = useState(false);
    return (
        <div className="lead-notes">
            <h3>Notas sobre {`${lead.name} ${lead.last_name}:`}</h3>
            <div onClick={() => setDisplayedNoteField(true)} className="add-note">
                <FontAwesomeIcon className="add-note-icon" icon={faPlusCircle} />
                <span>Añadir nota</span>
            </div>
            <NoteField display={displayedNoteField} />
            <NotesContainer />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchNotesStart: leadId => dispatch(fetchNotesStart(leadId))
});

const mapStateToProps = createStructuredSelector({
    lead: selectPopupLead
});

export default connect(mapStateToProps, mapDispatchToProps)(LeadNotes);