import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_RATINGS" actions
function* listSaga() {
    yield takeLatest('FETCH_RATINGS', fetchRatings);
}

function* fetchRatings() {
    try {
        const response = yield axios.get('/api/teas/ratings/');
        yield put({ type: 'SET_RATINGS', payload: response.data });
    } catch (error) {
        console.log('List get request failed', error);
    }
}


export default listSaga;