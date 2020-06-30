import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TEAS" actions
function* listSaga() {
    yield takeLatest('FETCH_TEAS', fetchTeas);
}

function* fetchTeas() {
    try {
        const response = yield axios.get('/api/teas');
        yield put({ type: 'SET_TEAS', payload: response.data });
    } catch (error) {
        console.log('List get request failed', error);
    }
}


export default listSaga;