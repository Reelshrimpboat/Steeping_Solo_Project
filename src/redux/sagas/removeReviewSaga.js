import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postReviewSaga () {
    yield takeEvery('REMOVE_REVIEW', postReview);
}

function* postReview (action) {
    try{
        yield axios.put (`/api/reviews/${action.payload.id}`)
        yield put({ type: 'FETCH_REVIEWS', payload: action.payload.id });
        yield put({ type: 'FETCH_TEAS'});
        yield put({ type: 'FETCH_USERS_TEAS' });
    } catch (error) {
        console.log('Error with Review POST', error);
    };
}

export default postReviewSaga;