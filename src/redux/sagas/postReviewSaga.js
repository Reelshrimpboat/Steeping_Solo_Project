import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postReviewSaga () {
    yield takeEvery('CHANGE_REVIEW', postReview);
 
}

function* postReview (action) {
    console.log(action.payload.id)
    yield axios.post (`/api/teas/review/${action.payload.id}`, {review: action.payload.review, rating: action.payload.rating})
    yield put({ type: 'FETCH_REVIEWS', payload: action.payload.id });
    yield put({ type: 'FETCH_USERS_TEAS' });
}

export default postReviewSaga;