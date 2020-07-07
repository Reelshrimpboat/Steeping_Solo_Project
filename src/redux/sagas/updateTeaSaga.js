import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* PutTea () {
    yield takeEvery('EDIT_TEA', editTea);
}

function* editTea (action) {
    try {
        yield axios.put (`/api/teas/`, action.payload )
        yield put({ type: 'FETCH_TEAS' });
    } catch (error) {
        console.log('Error with Tea edit PUT', error);
    };
}

export default PutTea;