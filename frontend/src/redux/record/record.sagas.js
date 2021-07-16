import { takeLatest, put, call, all } from "@redux-saga/core/effects";

import recordActionTypes from "./record.types";
import API from '../../api/axios';

import { fetchNotesSuccess, fetchNotesFailure, addNoteSuccess } from './record.actions';

export function* fetchNotesAsync({ payload }) {
    /**
     * payload expected to be the lead id
     */
    try {
        const response = yield API.post(
            '/get-lead-notes',
            {
                lead_id: payload
            }
        );
        const { status, data } = response;
        if (status === 200) yield put(fetchNotesSuccess(data));
    } catch (error) {
        yield put(fetchNotesFailure(error));
    }
}

export function* addNoteAsync({ payload }) {
    /**
     * payload expected to be an object including worker id, lead id, and note content
     */
     try {
        const response = yield API.post('/insert-new-note', payload);
        const { status, data } = response;
        if (status === 200) yield put(addNoteSuccess());
    } catch (error) {
        yield put(fetchNotesFailure(error));
    }

}

export function* onFetchNotesStart() {
    yield takeLatest(recordActionTypes.FETCH_NOTES_START, fetchNotesAsync);
}

export function* onAddNoteStart() {
    yield takeLatest(recordActionTypes.ADD_NOTE_START, addNoteAsync);
}

export function* recordSagas() {
    yield all([
        call(onFetchNotesStart),
        call(onAddNoteStart)
    ]);
}