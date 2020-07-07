import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* PostTea () {
    yield takeEvery('SUBMIT_TEA', submitTea);
 
}

function* submitTea (action) {
    try {
        yield axios.post (`/api/teas/`, action.payload )
        yield put({ type: 'FETCH_TEAS' });
    } catch (error) {
        console.log('Error with Tea POST', error);
    };
}

export default PostTea;