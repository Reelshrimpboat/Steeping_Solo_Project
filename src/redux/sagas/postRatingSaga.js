import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postRatingSaga () {
    yield takeEvery('CHANGE_RATING_STATUS', ratingTea);
 
}

function* ratingTea (action) {
    try {
        yield axios.post (`/api/usersteas/rating/${action.payload.id}`, {status: action.payload.status})
        yield put({ type: 'FETCH_USERS_TEAS' });
    } catch (error) {
        console.log('Error with Rating POST', error);
    };
}

export default postRatingSaga;