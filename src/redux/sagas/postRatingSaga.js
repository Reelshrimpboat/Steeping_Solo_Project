import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postRatingSaga () {
    yield takeEvery('CHANGE_RATING_STATUS', ratingTea);
 
}

function* ratingTea (action) {
    yield axios.post (`/api/teas/rating/${action.payload.id}`, {status: action.payload.status})
    yield put({ type: 'FETCH_USERS_TEAS' });
}

export default postRatingSaga;