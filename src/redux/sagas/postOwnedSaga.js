import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postOwnedSaga () {
    yield takeEvery('CHANGE_OWNED_STATUS', ownedTea);
 
}

function* ownedTea (action) {
    yield axios.post (`/api/usersteas/owned/${action.payload.id}`, {status: action.payload.status})
    yield put({ type: 'FETCH_USERS_TEAS' });
}

export default postOwnedSaga;