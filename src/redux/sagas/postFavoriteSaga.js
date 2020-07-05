import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postFavoriteSaga () {
    yield takeEvery('CHANGE_FAVORITE_STATUS', favoriteTea);
 
}

function* favoriteTea (action) {
    yield axios.post (`/api/usersteas/favorite/${action.payload.id}`, {status: action.payload.status})
    yield put({ type: 'FETCH_USERS_TEAS' });
}

export default postFavoriteSaga;