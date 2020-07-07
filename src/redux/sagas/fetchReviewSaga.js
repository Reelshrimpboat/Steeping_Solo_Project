import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_REVIEWS" actions
function* featchReviewsSaga() {
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
}

function* fetchReviews(action) {
    try {
        const response = yield axios.get(`/api/reviews/${action.payload}`);
        yield put({ type: 'SET_REVIEWS', payload: response.data });
    } catch (error) {
        console.log('Reviews get request failed', error);
    }
}


export default featchReviewsSaga;