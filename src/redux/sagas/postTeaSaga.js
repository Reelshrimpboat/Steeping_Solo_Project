import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* PostTea () {
    yield takeEvery('SUBMIT_TEA', submitTea);
 
}

function* submitTea (action) {
    yield axios.post (`/api/teas/`, action.payload )
    yield put({ type: 'FETCH_TEAS' });
}

export default PostTea;