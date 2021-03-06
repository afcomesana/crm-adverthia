import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { leadSagas } from './lead/lead.sagas';
import { recordSagas } from './record/record.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(leadSagas),
        call(recordSagas)
    ]);
}