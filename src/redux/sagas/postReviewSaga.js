import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postSaga () {
    yield takeEvery('ADD_REVIEW', postReview);
 
}

function* postReview (action) {
    yield axios.post ('/api/shelf', action.payload )
    yield put({ type: 'FETCH_REVIEWS' });
}

export default postSaga;