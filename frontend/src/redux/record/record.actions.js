import recordActionTypes from "./record.types"

export const fetchNotesStart = leadId => ({
    type: recordActionTypes.FETCH_NOTES_START,
    payload: leadId
});

export const fetchNotesSuccess = notes => ({
    type: recordActionTypes.FETCH_NOTES_SUCCESS,
    payload: notes
});

export const fetchNotesFailure = error => ({
    type: recordActionTypes.FETCH_NOTES_FAILURE,
    payload: error.message
});

export const addNoteStart = noteData => ({
    type: recordActionTypes.ADD_NOTE_START,
    payload: noteData
});

export const addNoteSuccess = () => ({
    type: recordActionTypes.ADD_NOTE_SUCCESS
});

export const addNoteFailure = error => ({
    type: recordActionTypes.ADD_NOTE_FAILURE,
    payload: error.message
});