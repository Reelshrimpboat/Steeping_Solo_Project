import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* DeleteTea () {
    yield takeEvery('DELETE_TEA', teaDelete);
}

function* teaDelete (action) {
    try {
        yield axios.delete(`/api/teas/delete/${action.payload}`)
        yield put({ type: 'FETCH_TEAS' });
    } catch (error) {
        console.log('Error with Tea Delete', error);
    };
}

export default DeleteTea;