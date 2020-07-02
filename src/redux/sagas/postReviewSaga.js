import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postReviewSaga () {
    yield takeEvery('CHANGE_REVIEW', postReview);
 
}

function* postReview (action) {
    yield axios.post (`/api/teas/review/${action.payload.id}`, {review: action.payload.review})
    yield put({ type: 'FETCH_REVIEWS' });
}

export default postReviewSaga;