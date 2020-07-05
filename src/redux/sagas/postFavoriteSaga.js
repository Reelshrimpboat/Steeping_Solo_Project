import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postFavoriteSaga () {
    yield takeEvery('CHANGE_FAVORITE_STATUS', favoriteTea);
 
}

function* favoriteTea (action) {
    try{
        yield axios.post (`/api/usersteas/favorite/${action.payload.id}`, {status: action.payload.status})
        yield put({ type: 'FETCH_USERS_TEAS' });
    } catch (error) {
        console.log('Error with Favorite POST', error);
    };
}

export default postFavoriteSaga;