import React, { useState } from 'react';
import './note-field.styles.css';

import SaveButton from '../save-button/save-button.component';

import { addNoteStart } from '../../redux/record/record.actions';
import { selectCurrentUserId } from '../../redux/user/user.selector';
import { selectPopupLeadId } from '../../redux/lead-popup/lead-popup.selector';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const NoteField = ({ display, addNoteStart, workerId, leadId }) => {
    const [note, setNote] = useState('');
    const handleClick = () => {
        const noteData = {
            leadId,
            workerId, 
            content: note
        };
        if (note) addNoteStart(noteData);
    }

    return (
        <div className={`note-field-container${display ? ' display' : ''}`}>
            <div className={`note-field`}>
                <textarea 
                    onChange={e => setNote(e.target.value)} 
                    value={note} 
                    name="note" 
                    cols="30"
                    rows="10" 
                    placeholder="Escribe tu nota..."
                />
            </div>
            <SaveButton handleClick={handleClick}>Añadir</SaveButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addNoteStart: note => dispatch(addNoteStart(note))
});

const mapStateToProps = createStructuredSelector({
    workerId: selectCurrentUserId,
    leadId: selectPopupLeadId
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteField);