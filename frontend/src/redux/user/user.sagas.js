import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInFailureWarning(action) {
    const { type, payload } = yield action;
    if (payload.name === "EmailDomainError") {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: "Email no válido",
            text: "Debe pertenecer a Adverthia Digital Marketing para acceder al CRM.",
            icon: "error",
            confirmButtonText: "Vale"
        });
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignInFailure() {
    yield takeLatest(userActionTypes.SIGN_IN_FAILURE, signInFailureWarning);
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onSignInFailure),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}