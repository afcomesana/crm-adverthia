import { takeLatest, call, put, all } from 'redux-saga/effects';
import leadActionTypes from './lead.types';

import API from '../../api/axios';

import {
    fetchLeadsStart,
    fetchLeadsSuccess,
    fetchLeadsFailure,
    changeStageFailure,
    changeStageSuccess,
    updateLeadError,
    updateLeadSuccess
} from './lead.actions';

import { closeLeadPopup } from '../lead-popup/lead-popup.actions';

export function* fetchLeadsAsync() {
    try {
        const response = yield API.get('/leads');
        const { data, status } = response;
        if (status === 200) yield put(fetchLeadsSuccess(data));
    } catch (error) {
        yield put(fetchLeadsFailure(error));
    }
}

export function* changeStageAsync({ payload: {id, stage} }) {
    try {
        const response = yield API.post(
            '/change-lead-stage',
            {
                id,
                stage
            }
        );
        if (response.status === 200) yield put(changeStageSuccess());
    } catch (error) {
        yield put(changeStageFailure(error));
    }
}

export function* updateLeadAsync({ payload }) {
    console.log("update async");
    try {
        const response = yield API.post(
            '/update-lead',
            payload
        );
        if (response.status === 200) yield put(updateLeadSuccess());
    } catch ( error ) {
        yield put(updateLeadError(error));
    }
}

export function* fetchLeadsStartCall() {
    yield put(fetchLeadsStart());
}

export function* updateLeadSuccessCall() {
    yield put(fetchLeadsStart());
    yield put(closeLeadPopup());
}

export function* onFetchLeadsStart() {
    yield takeLatest(leadActionTypes.FETCH_LEADS_START, fetchLeadsAsync);
}

export function* changeStageStart() {
    yield takeLatest(leadActionTypes.CHANGE_STAGE_START, changeStageAsync);
}

export function* onChangeStageSuccess() {
    yield takeLatest(leadActionTypes.CHANGE_STAGE_SUCCESS, fetchLeadsStartCall);
}

export function* onUpdateLeadStart() {
    yield takeLatest(leadActionTypes.UPDATE_LEAD_START, updateLeadAsync);
}

export function* onUpdateLeadSuccess() {
    yield takeLatest(leadActionTypes.UPDATE_LEAD_SUCCESS, updateLeadSuccessCall);
}

export function* leadSagas() {
    yield all([
        call(onFetchLeadsStart),
        call(changeStageStart),
        call(onChangeStageSuccess),
        call(onUpdateLeadStart),
        call(onUpdateLeadSuccess)
    ]);
}