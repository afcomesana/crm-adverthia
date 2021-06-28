import { takeLatest, call, put, all } from 'redux-saga/effects';
import leadActionTypes from './lead.types';

import API from '../../api/axios';

import {
    fetchLeadsStart,
    fetchLeadsSuccess,
    fetchLeadsFailure,
    changeStageFailure,
    changeStageSuccess
} from './lead.actions';

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

export function* fetchLeadsStartCall() {
    yield put(fetchLeadsStart());
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

export function* leadSagas() {
    yield all([
        call(onFetchLeadsStart),
        call(changeStageStart),
        call(onChangeStageSuccess)
    ]);
}